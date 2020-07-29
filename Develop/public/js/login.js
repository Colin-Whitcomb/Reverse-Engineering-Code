$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      // collecting user email input
      email: emailInput.val().trim(),
      // collecting user password input
      password: passwordInput.val().trim()
    };

    // avoids empty email or password inputs
    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    // POST request
    $.post("/api/login", {
      // send user email
      email: email,
      // send user password
      password: password
    })
      // afterwards... 
      .then(function() {
        // send user to members page 
        window.location.replace("/members");
        
      })
      // If there's an error... 
      .catch(function(err) {
        // log the error
        console.log(err);
      });
  }
});
