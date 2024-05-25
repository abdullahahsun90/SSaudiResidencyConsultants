// Initialize EmailJS with your service ID
emailjs.init("service_nvc6e2l");

// Function to send email
function sendEmail() {
  // Get user input
  var fullName = document.querySelector('.home-textinput').value;
  var email = document.querySelector('.home-textinput1').value;
  var message = document.querySelector('.home-textarea').value;

  // Check if any field is empty
  if (!fullName || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Prepare email parameters
  var params = {
    from_name: fullName,
    to_email: "abdullah.ahsun@yahoo.com",
    user_email: email,
    message: message
  };

  // Send email using EmailJS
  emailjs.send("service_nvc6e2l", "template_40dgxrj", params)
    .then(function(response) {
      alert("Your message has been sent successfully.");
      // Clear input fields
      document.querySelector('.home-textinput').value = "";
      document.querySelector('.home-textinput1').value = "";
      document.querySelector('.home-textarea').value = "";
    }, function(error) {
      alert("An error occurred. Please try again later.");
      console.error("Email sending failed:", error);
    });
}

// Attach click event listener to "Send message" button
document.querySelector('.secondary-button-button').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission
  sendEmail(); // Call sendEmail function
});
