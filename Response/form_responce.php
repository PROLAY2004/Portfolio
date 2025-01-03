
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // $email = $_POST['email'];
    // $file = $_FILES['file'];


    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $details = htmlspecialchars($_POST['details']);

    $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();                                             // Set mailer to use SMTP
            $mail->Host       = 'mail.prolay.whf.bz';                  // Specify main and backup SMTP servers
            $mail->SMTPAuth   = true;                                    // Enable SMTP authentication
            $mail->Username   = 'portfolio@prolay.whf.bz';              // SMTP username
            $mail->Password   = 'Prolay@2004';                             // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;           // Enable TLS encryption, `ssl` also accepted
            $mail->Port       = 587;                                     // TCP port to connect to

            // Disable certificate verification (use only for testing)
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );

            // Additional Headers
            $mail->addCustomHeader('X-Priority', '1'); // High priority
            $mail->addCustomHeader('X-MSMail-Priority', 'High');
            $mail->addCustomHeader('Importance', 'High');

            // Recipients
            $mail->setFrom('portfolio@prolay.whf.bz', 'Portfolio form Submission');
            $admin="prolayhalder2004@gmail.com";
            $mail->addAddress($admin);                                  // Add recipient


            // $mail->addAttachment($file['tmp_name'], $file['name']);      // Add attachment

            // Content
            $mail->isHTML(true);                                        // Set email format to HTML
            $mail->Subject = 'Message from Portfolio Website';
            $mail->Body    = "
        <html>
        <head>
            <title>$subject</title>
        </head>
        <body>
            <h2>Message Details</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong> $details</p>
        </body>
        </html>
        ";

            $mail->send();
            $success_message = "Email has been sent successfully.";
            header("Location: https://portfolio.prolay.whf.bz/");
            exit();
        } catch (Exception $e) {
            $error_message = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }

}
?>
