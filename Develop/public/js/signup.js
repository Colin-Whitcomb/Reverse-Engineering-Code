$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    // capture the users input
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    // don't let the inputs be empty
    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    //post request
    $.post("/api/signup", {
      //sends email
      email: email,
      //sends password
      password: password
    })
      .then(function(data) {
        // directs to members page
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      // if err, catch err and run funct
      .catch(handleLoginErr);
  }
  // err function
  function handleLoginErr(err) {
    // send alert message
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
