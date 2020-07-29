// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  // default get route (first page)
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    // If the user does not have an account yet, send the sign up page
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // get request for the login page
  app.get("/login", function(req, res) {
    // If the user logged in send them to the members page
    if (req.user) {
    // send them to the members page 
      res.redirect("/members");
    }
    // if the user needs a login, send them to the login page
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};
