# Reverse-Engineering-Code

<p align="center">
 App Preview
 </p>
<p align="center">
    <img src="https://media.giphy.com/media/SqfoGYsZ9onQxvy9PG/giphy.gif" width="330" />
</p>
  
## Assignment Summary 
For this assignment, our objective was to create a tutorial walk-through of the existing code base. We were prompted to simulate the process of helping someone else (new) through the code in an easy-to-understand manner. Additionally, we were required to fill in comments line-by-line to thoroughly describe how each part of the code operates. 

My tutorial submission is found in <b><u>Develop/tutorial.md</u></b>, and I invite you to inspect the other files in the Develop folder to peruse my written commentary.


## App Overview
This app, let's call if "Loggo" for fun, walks the user through a sign up and login function.  Only after being verified does "Loggo" lead the user to a member page (see gif above). 

"Loggo" was created with an MVC structure where routes are designated operators between a backend database and the client side API requests. The information stored and verified includes the user email address and password. Validations were added to ensure the credentials match before logging in the user. (See the tutorial.md for error details).

## Development Suggestions

After observing how "Loggo" works, I came across a few problems. The main issue is that when initially loading the page, the user is prompted with the sign up page. If the user already has an existing account, they can then follow the link to the login page. My suggestion would be to switch the order of the sign-up and login pages. By making the login page the default, it will cater to existing members ("Loggers" for fun) by making it easier and faster to login. 

<i>"Loggers" just want to log-in!</i>  
______________

## Technologies Used
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- mySQL / MVC structure
- Node.js / Javascript / ES6 
- Visual Studio Code
- Git / GitHub / Heroku

## Contact

* [Colin Whitcomb](https://github.com/Colin-Whitcomb)
* [LinkedIn](https://www.linkedin.com/in/colin-whitcomb-b808301a6/)
* [Portfolio](https://colin-whitcomb.github.io/Portfolio/)