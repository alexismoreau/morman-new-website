<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
    if(($_POST['name'] !== '') && ($_POST['email'] !== '') && ($_POST['message'] !== '')) {
        //send email
        $name= $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $recipient = "morman.design@gmail.com";
        
        $subject = "Nouveau contact: $name";
        
        $email_content = "Nom: $name\n\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";

        $email_headers = "De: $name <$email>";

                // Send the email.
                if (mail($recipient, $subject, $email_content, $email_headers)) {
                    // Set a 200 (okay) response code.
                    http_response_code(200);
                    $reponse = "Merci! Votre message a bien été envoyé. <a href='index.html'>Retour au site</a>";
                } else {
                    // Set a 500 (internal server error) response code.
                    http_response_code(500);
                    $reponse = "Oops! Quelque chose ne s'est pas bien passé avec votre message. <a href='index.html'>Retour au site</a>";
                }
    } else {
        $reponse = "Les champs sont vides <a href='index.html'>Retour au site</a>";
    }
} else {
    $reponse = "Tous les champs ne sont pas parvenus <a href='index.html'>Retour au site</a>";
}
 
echo $reponse;
?>