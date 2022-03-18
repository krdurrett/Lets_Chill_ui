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

On page load, see a list of feelings. Click on a feeling, and see a list of actions you can take based on feeling. 

![landing_page_view](https://media.giphy.com/media/nhkpHvRK8D4mEdsBLR/giphy.gif)

Once you choose the action, click on it to see details about the action. You can also click on the reference to take you to the website with more information about the action.

![action-details-view](https://media.giphy.com/media/DsPbZTuRbcb94y6h9l/giphy.gif)

User has the ability to log the feeling, corresponding action, and whether or not it helped along with the date. Then, you can click on your Chill Log link to view what you have logged.

![chill-log-view](https://media.giphy.com/media/wEW2jozD9gB6GDbVPw/giphy.gif)

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
- Heroku
- Postman
- NPM

## Testing <a name="testing"></a>

Cypress was used for E2E and integration testing. To test the application: run `npm run cypress` and you will have a window open that gives you the ability to click on each test and see whether they pass. Make sure you've run `npm start` in a separate terminal tab before you begin the testing. 

<img width="797" alt="Screen Shot of cypress testing" src="https://user-images.githubusercontent.com/88299275/156936775-7fff2bb1-751e-4e5c-9393-16febf513ca1.png">

Example of a successful test:

![lc-test-gif](https://media.giphy.com/media/lQxD3KWUsyjBmmUCgb/giphy.gif)

## Project Challanges <a name="projectChallanges"></a>

- Creating a fully functional niche-scope app from concept to production in 5 days
- Responsive design, making application is accessible and easy to use on any size device
- Learning PropTypes to type check the data being passed through components


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

- Allow user to delete log entries
- Build a functional database on the backend to allow for more than one user, and for users log entries to persist
- Allow user to add actions that help them
- Allow user to delete actions that do not help them

## Authors

- [Kayla Durrett](https://github.com/krdurrett)

- Project Manager: [Hannah Hudson](https://github.com/hannahhch)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
