import * as THREE from 'three';
import {TweenMax, Expo} from 'gsap';


const home = () => {
  let el = document.querySelector('.home__image');
  let imgs = Array.from(el.querySelectorAll('img'));
  let dispImage = el.dataset.displacement;
  let image1 = imgs[0].getAttribute('src');
  let image2 = imgs[1].getAttribute('src');
  let intensity = -0.65;
  let speedIn = 0.5;
  let speedOut = 0.5;
  let easing = Expo.easeOut;

  //Scene
  let scene = new THREE.Scene();

  //Camera
  let camera = new THREE.OrthographicCamera(
    el.offsetWidth / -2.5,
    el.offsetWidth / 2.5,
    el.offsetHeight / 3,
    el.offsetHeight / -3,
    1,
    1000
  );
  camera.position.z = 1;

  let vertex = `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `;

  let fragment = `
    varying vec2 vUv;

    uniform sampler2D texture;
    uniform sampler2D texture2;
    uniform sampler2D disp;

    uniform float dispFactor;
    uniform float effectFactor;

    void main() {
        vec2 uv = vUv;
        vec4 disp = texture2D(disp, uv);

        vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y );
        vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y );

        vec4 _texture = texture2D(texture, distortedPosition);
        vec4 _texture2 = texture2D(texture2, distortedPosition2);

        vec4 finalTexture = mix(_texture, _texture2, dispFactor);

        gl_FragColor = finalTexture;
    }
  `;

  //Renderer
  let renderer = new THREE.WebGLRenderer({ antialias: false});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff, 0.0);
  window.innerWidth <= 760 ? renderer.setSize(el.offsetWidth*1.3, el.offsetHeight*1.3) : renderer.setSize(el.offsetWidth, el.offsetHeight);

  el.appendChild(renderer.domElement);

  let loader = new THREE.TextureLoader();

  let texture1 = loader.load(image1);
  let texture2 = loader.load(image2);
  let disp = loader.load(dispImage);

  disp.wrapS = disp.wrapT = THREE.RepeatWrapping;

  //Filters
  texture1.magFilter = texture2.magFilter = THREE.LinearFilter;
  texture1.minFilter = texture2.minFilter = THREE.LinearFilter;
  texture1.anisotropy = renderer.getMaxAnisotropy();
  texture2.anisotropy = renderer.getMaxAnisotropy();

  //Shader Material
  let material = new THREE.ShaderMaterial({
    uniforms: {
      effectFactor: { type: "f", value: intensity },
      dispFactor: { type: "f", value: 0.0 },
      texture: { type: "t", value: texture1 },
      texture2: { type: "t", value: texture2 },
      disp: { type: "t", value: disp }
    },

    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    opacity: 1.0
  });

  let geometry = new THREE.PlaneBufferGeometry(
    el.offsetWidth,
    el.offsetHeight,
    1
  );

  let object = new THREE.Mesh(geometry, material);
  scene.add(object);

  let doSomething = () => {
    TweenMax.to(material.uniforms.dispFactor, speedIn, {value: 0.021});
    TweenMax.to(material.uniforms.dispFactor, speedOut, {value: 0,delay: 0.01});
  }

  (function loop() {
    var rand = Math.round(Math.random() * (12000 - 500)) + 500;
      setTimeout(function() {
        doSomething();
        loop();
      }, rand);
  }());


  window.addEventListener("resize", function(e) {
    window.innerWidth <= 760 ? renderer.setSize(el.offsetWidth*1.3, el.offsetHeight*1.3) : renderer.setSize(el.offsetWidth, el.offsetHeight);

  });

  let animate = function() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();

}


export default home;

