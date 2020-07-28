// strict mode - does not permit the use of undeclared variables 
'use strict';

// npm file system that has pre built methods like forEach()
var fs        = require('fs');
// npm that makes it easier to create urls
var path      = require('path');
// prebuild ORM with template methods 
var Sequelize = require('sequelize');

var basename  = path.basename(module.filename);
// returns an object containing the user environment 
var env       = process.env.NODE_ENV || 'development';
//connects server.js to the config.json page
var config    = require(__dirname + '/../config/config.json')[env];
// empty object (to be filled in later)
var db        = {};


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

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
