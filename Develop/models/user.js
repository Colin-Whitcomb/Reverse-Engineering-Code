// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {

  // Creates New User - Requires email and password
  var User = sequelize.define("User", {
    //  and must be a proper email before creation
    email: {
      // collect input as a String
      type: DataTypes.STRING,
      // The email cannot be null
      allowNull: false,
      // Email cannot already exist in the db
      unique: true,
      // checks for email format 'foo@bar.com'
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      // collect input as a String
      type: DataTypes.STRING,
      // password cannot be null
      allowNull: false
    }
  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};