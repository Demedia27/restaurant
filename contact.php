<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])) {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Set up the recipient email address (your email address)
    $to = 'udemeinwang@gmail.com';
    
    // Set up the email subject
    $subject = 'New message from your website contact form';
    
    // Compose the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Set up headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Send the email using mail() function
    if (mail($to, $subject, $email_content, $headers)) {
        // Send JSON response back to JavaScript for displaying success message
        echo json_encode(array('message' => 'Your message has been sent successfully. We will get back to you soon!'));
    } else {
        // Send JSON response back to JavaScript for displaying error message
        echo json_encode(array('message' => 'Oops! Something went wrong. Please try again later.'));
    }
} else {
    // Send JSON response back to JavaScript for displaying error message if form data is incomplete
    echo json_encode(array('message' => 'Please fill out all the required fields.'));
}
?>
