#  Code Tutorial

<p align="center">
App Preview
 </p>
<p align="center">
    <img src="https://med.giphy.com/media/Y1Ac1jXxBcxPmvneBi/giphy.gif" width="500" />
</p>

## Introduction - UX Brief
This app walks the user through a sign up and login function, which, only after verified, leads the user to a member page. This file will walk through the code to describe how all peices work in conjunction.

## Table of Contents

* [Instructions - to Use](#instructions)

* [Technologies Used](#technologies_used)

* [Contact](#contact)

_______

### Client Side Components -  HTML & JS 
<ol>
    <li>Sign Up</li>
    <li>Login</li>
    <li>Members</li>
</ol>

The codebase contains three HTML pages held in the public folder. These files hold the skeletal structure for different pages to be displayed to the user. Each page has a corresponding .js file that executes all required client side functions including listening for on(submit) functions that send api requests (POST & GET) to the server (example below). 
<p align="center">
    <img src="./images/ss1.png" width="385" />
</p>

__________

### Server Side Components -  Routes | Models |  Config

Since this file structure follows the MVC paradigm, the use of routes and models are to be expected. The two routes.js files serve the purpose of controller between the user and server. The route api-routes is listening to all api requests from the server and fulfilling those requests by connecting to the models/database and responding to the clients' specified requests (i.e. api/signup sends a POST request to add email and password info to the database). The html-routes.js file does the work of handling all html requests and renders the appropriate html page when requested via GET requests. 

Held in the models folder, the index.js file works as an intermediary between the server and the html routes that allows the html routes to change pages. The second file, the user.js, provides a model for a user that includes an email and password with specific validation requirements. 

<p align="center">
    <img src="./images/ss2.png" width="250" />
</p>

The components in the config file perform a variety of functions. The passport.js file 


## Instructions 
- Fork the Repo 
- Copy / Paste / Run the info in employeeTracker.sql into your personal mySQL workbench
- Once in a code editor, npm install in your command line
- run 'node app.js' as a CLI 
- continue through prompts as desired

## Technologies_Used
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- mySQL 
- Node.js / Javascript / ES6 
- NPM / Inquirer
- Visual Studio Code
- Git / GitHub / GitPage

## Contact

* [Colin Whitcomb](https://github.com/Colin-Whitcomb)
* [LinkedIn](https://www.linkedin.com/in/colin-whitcomb-b808301a6/)
* [Portfolio](https://colin-whitcomb.github.io/Portfolio/)