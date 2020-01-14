import React, { useEffect } from 'react';
import * as THREE from 'three';

const WebGLHome = () => {
  useEffect(() => {

    var container;
    var camera, scene, renderer;
    var uniforms;

    let vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `
    let fragmentShader = `
      uniform vec2 u_resolution;
      uniform float u_time;
      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy * 0.4;
        gl_FragColor=vec4(0.8, st.x * (u_time * 1.0), st.y * (u_time * 1.0), 1.0);
      }
    `

    function init() {
      container = document.querySelector( '.canvas-home' );
      camera = new THREE.Camera();
      camera.position.z = 1;

      scene = new THREE.Scene();
      var geometry = new THREE.PlaneBufferGeometry( 2, 2 );
      uniforms = {
        u_time: { type: "f", value: 1.0 },
        u_resolution: { type: "v2", value: new THREE.Vector2() },
        u_mouse: { type: "v2", value: new THREE.Vector2() }
      };

      var material = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        vertexShader,
        fragmentShader
      });

      var mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio( window.devicePixelRatio );

      container.appendChild( renderer.domElement );

      onWindowResize();
      window.addEventListener( 'resize', onWindowResize, false );

      document.onmousemove = function(e){
        uniforms.u_mouse.value.x = e.pageX
        uniforms.u_mouse.value.y = e.pageY
      }
    }

    function onWindowResize( event ) {
      renderer.setSize( window.innerWidth, window.innerHeight );
      uniforms.u_resolution.value.x = renderer.domElement.width;
      uniforms.u_resolution.value.y = renderer.domElement.height;
    }

    function animate() {
      requestAnimationFrame( animate );
      render();
    }

    let dir = 1;

    function render() {
      if (uniforms.u_time.value > 1.4) dir = -1
        else if (uniforms.u_time.value < 0.0) dir = 1
        uniforms.u_time.value += dir * 0.009;

      renderer.render( scene, camera );
    }

    init();
    animate();
  }, []);

  return (
    <div className="canvas-home"></div>
  )
}

export default WebGLHome;
