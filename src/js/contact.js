import $ from 'jquery';

const contact = () => {
  $(document).ready(function ($) {

    let url;

    window.location.href.indexOf('http://localhost') > -1  ? url = 'http://ovalleswp:8888' : url = 'https://alfredoovalles.com';

    $('.form input[type="text"], .form input[type="email"], .form textarea').val('');

    const $mask = document.querySelector('.contact__mask');
    const $output = document.querySelector('.contact__output');

    const showMask = output => {
      $mask.classList.add('visible');
      $output.classList.add('visible');
      $output.innerHTML = output;
      setTimeout(function () {
        $mask.classList.remove('visible');
        $output.classList.remove('visible');
      }, 1000);
    }

    $(document).on("click", ".submit", function (e) {
      var output;
      e.preventDefault();
      var proceed = true;

      if (!$.trim($('.input-name').val())) {
        proceed = false;
        output = '<h3 class="error">Please, enter your name</h3>';
        showMask(output);
      }

      if ($('.input-name').val().length < 3 && proceed === true) {
        proceed = false;
        output = '<h3 class="error">Your name is too short</h3>';
        showMask(output);
      }

      if ($('.input-name').val().length > 30 && proceed === true) {
        proceed = false;
        output = '<h3 class="error">Your name is too long</h3>';
        showMask(output);
      }

      if (!$.trim($('.input-email').val()) && proceed === true) {
        proceed = false;
        output = '<h3 class="error">Please, enter your email</h3>';
        showMask(output);
      }

      var email_reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (
        !email_reg.test($.trim($('.input-email').val())) && proceed === true
      ) {
        proceed = false;
        output = '<h3 class="error">Please, enter a valid email</h3>';
        showMask(output);
      }

      if (!$.trim($(".input-message").val()) && proceed === true) {
        proceed = false;
        output = '<h3 class="error">Please, enter a message</h3>';
        showMask(output);
      }

      if ($(".input-message").val().length < 5 && proceed === true) {
        proceed = false;
        output = '<h3 class="error">Your message is too short!</h3>';
        showMask(output);
      }

      if ($(".input-message").val().length > 200 && proceed === true) {
        proceed = false;
        output = '<h3 class="error">Your message is too long!</h3>';
        showMask(output);
      }


      if (proceed) {

        var post_data = {
          user_name: $(".input-name").val(),
          user_email: $(".input-email").val(),
          msg: $(".input-message").val(),
        };

        $.post(
          "mailer.php",
          post_data,
          function (response) {
            if (response.type === "error") {
              output = response.text;
              console.log('error');
              showMask(output);
            } else {
              output = response.text;
              showMask(output);
              $('.input-name, .input-email, .input-message').val('');
            }
          },
          "json"
        );
      }
    });
});

}

export default contact;
