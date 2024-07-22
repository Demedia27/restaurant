$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submit behavior

        // Get form data
        var formData = {
            'name': $('#name').val(),
            'email': $('#email').val(),
            'message': $('#message').val()
        };

        // Send form data to the server using AJAX
        $.ajax({
            type: 'POST',
            url: 'send_message.php', // Replace with the path to your PHP script
            data: formData,
            dataType: 'json', // Expect JSON response from the server
            encode: true
        })
        .done(function(response) {
            // Display the server's response message
            $('#responseMessage').html('<p>' + response.message + '</p>');
            // Optionally clear the form fields after successful submission
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        })
        .fail(function(response) {
            // Display error message if the AJAX request fails
            $('#responseMessage').html('<p>Oops! Something went wrong. Please try again later.</p>');
        });
    });
});
