// strict mode - does not permit the use of undeclared variables 
'use strict';

// npm file system that has pre built methods like forEach()
var fs        = require('fs');
// npm that makes it easier to create urls
var path      = require('path');
// prebuild ORM with template methods 
var Sequelize = require('sequelize');
// current file
var basename  = path.basename(module.filename);
// returns an object containing the user environment 
var env       = process.env.NODE_ENV || 'development';
//connects server.js to the config.json page
var config    = require(__dirname + '/../config/config.json')[env];
// empty object (to be filled in later)
var db        = {};

// gets route from config.json to know if to go into development or production
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// file system
fs
// read directory (synchronous)
  .readdirSync(__dirname)
  // filter files
  .filter(function(file) {
    // return files that are note empty .... not current file, and that end with .js
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  // for every file that passes conditions...
  .forEach(function(file) {
    
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

// Iterates over each model in the db and invokes its associate function (if it has one), 
// presumably to setup any associations between models, foreign keys, cascades, etc.*
Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// exports a variety of links to use sequelize and models
module.exports = db;

//  * https://stackoverflow.com/questions/32592189/code-explanation-fs-from-sequelize-express-example