# 🧊 Let's Chill 🧊 

Welcome to Let's Chill--a new app for anxious people. If you're having trouble managing your feelings of anxiety, this is the app for you!

Deployed Application here: [Let's Chill](http://lets-chill-ui.herokuapp.com/)

# Table of Contents

1. [Overview](#overview)
2. [Installation Instructions](#installationInstructions)
3. [Project Goals](#projectGoals)
4. [Directions and Features](#directions)
5. [Code Architecture](#codeArchitecture)
6. [Technologies Used](#techUsed)
7. [Testing](#testing)
8. [Project Challanges](#projectChallanges)
9. [Project Wins](#projectWins)
10. [Future Iterations](#futureIterations)
11. [Authors](#authors)

## Overview <a name="overview"></a>

Let's Chill is a Mod 3 solo-project at the Turing School of Software and Design that was built with `create-react-app` and tested using Cypress. React, React Router and data pulled from a backend server I created were used to display certain feelings of anxiety and actions to treat anxiety. The user can select how they are currently feeling and see a list of actions to address how they are feeling. They can view details about that action, and they have the option to log the action, whether or not it helped, and the date. Additionally, the user will find Let's Chill to be a responsively designed application that they may use on many different screens.

- Project Spec here: [Showcase](https://frontend.turing.edu/projects/module-3/showcase.html)
- Let's Chill API: 
    - GitHub: [Let's Chill API](https://github.com/krdurrett/Lets-Chill-api)
    - Heroku: [Let's Chill API](https://lets-chill-api.herokuapp.com/api/v1/actions)


## Installation Instructions <a name="installationInstructions"></a>

1. Clone down [this repository](https://github.com/krdurrett/Lets_Chill_ui)
2. Run `npm install`
3. Run `npm start` in your terminal
4. Go to http://localhost:3000/ and you should see the website
5. Enter `control + c` in your terminal to stop the server at any time.

## Project Goals <a name="projectGoals"></a>

- Continue to gain competency with React fundamentals, Router and Cypress testing
- Practice building a server in Express 
- Practice how to deploy an API and a UI on Heroku
- Build a React application from concept to production


## Directions and Features <a name="directions"></a>

Scroll through the main page to view all books in the database. Each books's cover, title and author are visible. 

![main_page_view](https://media.giphy.com/media/7Q9UX06Z6FbB40wdEP/giphy.gif)

Click on the 'Learn More' button next to a book cover that interests you to view a book's details. On this page a description of the book's plot is presented. The user is also given the ability to add to or remove a book from their favorites as well as the option to buy the book on Amazon. They can view all of their favorited books by clicking the "Your favorites" button at the top right of the page. Click the book club logo at the top left of the page to return to the main page.

![favorite-unfavorite-book](https://media.giphy.com/media/m2txGQ1Ikbi4EJ9k5L/giphy.gif)

## Code Architecture <a name="codeArchitecture"></a>

The React architecture is based on five class components (App.js, ActionDetails.js, ChillLogContainer.js, FeelingsForm.js, LogForm.js) and eleven functional components (Action.js, ActionDetailContainer.js, ActionsContainer.js, ChillLogLink.js, DetailNav.js, Entry.js, Error404.js, ErrorModal.js, Loading.js, MainNav.js, Nav.js). The class components hold state and are in charge of the network requests, while the functional components render information passed down as props.

## Technologies Used <a name="techUsed"></a>

### Frontend Technologies
- React
- React Router
- Javascript
- CSS3
- HTML5
- Fetch API
- webpack
- PropTypes
- NPM
- Cypress

### Backend Technologies

- Express
- JavaScript
- Node.js
- Node Fetch
- Heroku
- Postman
- NPM

## Testing <a name="testing"></a>

Cypress was used for E2E and integration testing. To test the application: run `npm run cypress` and you will have a window open that gives you the ability to click on each test and see whether they pass. Make sure you've run `npm start` in a separate terminal tab before you begin the testing. 

<img width="784" alt="Screen Shot 2022-02-27 at 4 13 13 PM" src="https://user-images.githubusercontent.com/78453792/155904096-2c56df5b-8948-45f3-9356-b3c2b466df18.png">

Example of a successful test:

![bc-test-gif](https://user-images.githubusercontent.com/78453792/155904117-943b901c-4006-473b-93d1-09a56a7eca94.gif)

## Project Challanges <a name="projectChallanges"></a>

-  

## Project Wins <a name="projectWins"></a>

- Created a fully funtional MVP with time scope of 5 days
- Continued to build a strong understanding of React framework 
- Successfully built an API with using Express
- Completed a thorough project plan and wireframe
- Implemented React Router for a multi-page UX
- Continued to gain competency with Cypress E2E testing framework
- Utilized typechecking with PropTypes
- Designed UI to be responsive to multiple screen sizes

## Future Iterations <a name="futureIterations"></a>

- A login page with authorization for users where they could store books to their favorites and could add their ratings/reviews

## Authors

- [Kayla Durrett](https://github.com/krdurrett)

- Project Manager: [Hannah Hudson](https://github.com/hannahhch)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
