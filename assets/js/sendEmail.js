// Initialize EmailJS with your User ID (Public Key)
emailjs.init('sWX_U3CtvfMFeYUsH'); // Replace with your actual EmailJS User ID

// Function to send email
function sendEmail() {
    // Fetch form data
    let formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send('service_qyt6al8', 'template_6rq11jq', formData)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            //alert('Email sent successfully!');
            document.getElementById('contactForm').reset(); // Optionally clear the form
        }, function(error) {
            console.error('Error sending email:', error);
            alert('There was a problem sending your email. Please try again later.');
        });
}
