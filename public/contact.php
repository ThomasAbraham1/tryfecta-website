<?php
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Retrieve and sanitize form inputs
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $company = strip_tags(trim($_POST["company"]));
    $services = strip_tags(trim($_POST["services"])); // Will come in as a comma-separated string
    $message = trim($_POST["message"]);

    // Check that required data was sent
    if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["error" => "Please complete all required fields properly."]);
        exit;
    }

    // Set the recipient email address
    // This is the destination email requested by the user
    $recipient = "info@tryfecta.biz";

    // Set the email subject
    $subject = "New Contact Form Submission from $name";

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    if(!empty($company)) {
        $email_content .= "Company: $company\n";
    }
    if(!empty($services)) {
        $email_content .= "Services of Interest: $services\n";
    }
    $email_content .= "\nMessage:\n$message\n";

    // Build the email headers
    $email_headers = "From: $name <$email>";

    // Send the email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["success" => true, "message" => "Thank You! Your message has been sent."]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Oops! Something went wrong and we couldn't send your message."]);
    }

} else {
    // Not a POST request
    http_response_code(403);
    echo json_encode(["error" => "There was a problem with your submission, please try again."]);
}
?>
