<?php
if($_POST) {
  $to_email  = "contact@alfredoovalles.com";

  //check if its an ajax request, exit if not
  if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    $output = json_encode(array( //create JSON data
      'type'=>'error',
      'text' => 'Sorry Request must be Ajax POST'
    ));
    die($output); //exit script outputting json data
  }

  $user_name      = filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
  $user_email     = filter_var($_POST["user_email"], FILTER_SANITIZE_EMAIL);
  $message        = filter_var($_POST["msg"], FILTER_SANITIZE_STRING);
  $subject        = "New Feedback from Alfredo Ovalles";


  if( strlen($user_name) < 3 || strlen($user_name) > 30   ){
    //$output = json_encode(array('type'=>'error', 'text' => 'Name is too short or empty!'));
    die($output);
  }
  if(!filter_var($user_email, FILTER_VALIDATE_EMAIL)){
    //$output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
    die($output);
  }
  if( strlen($message) < 5 || strlen($message) > 200  ){
    //$output = json_encode(array('type'=>'error', 'text' => 'Too short message! Please enter something.'));
    die($output);
  }



  $message_body = $message."\r\n\r\n".$user_name."\r\nEmail : ".$user_email;
  $headers = 'From: '. $user_email .'' . "\r\n" .
  'Reply-To: '.$user_email.'' . "\r\n" .
  'X-Mailer: PHP/' . phpversion();

  $send_mail = mail($to_email, $subject, $message_body, $headers);

  if(!$send_mail) {
      $output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
      die($output);
  } else {
    $output = json_encode(array('type'=>'message', 'text' => 'Thank you! We will contact you very soon.'));
      die($output);
  }
    // $output = json_encode(array('type'=>'message', 'text' => 'soy user '.$user_name));
    // die($output);
}
