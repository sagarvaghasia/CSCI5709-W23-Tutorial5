# TUTORIAL 5

* *Date Created*: 10 MAR 2023
* *Last Modification Date*: 06 FEB 2023
* *Tutorial 5:
* *Created By: SAGARKUMAR VAGHASIA 
* *Deployed app link = https://tutorial-5-ci81.onrender.com 
* *Gitlab Link = https://git.cs.dal.ca/vaghasia/csci5709-w23-tutorials/-/tree/Tutorial_5 



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Deployment

<!-- This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment) -->

I build backend framework having API calls GET, POST, PUT using Express.js [1]. I pushed my code on gitHub to deploy it on render. I deployed my web service on render [2] after authorizing GitHub successfully. 

# Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Reactjs](https://reactjs.org/docs/create-a-new-react-app.html) - The web framework used
**

# Sources Used

I built simple API calls having endpoint  - GET that returns list of users, PUT that updates user information such as email and/or firstname, POST that adds user in the list and also generated random id [4] and lastly new GET API to return single user object [5][3].
I used body-parser to parse incoming request bodies in a middleware [6].


# Acknowledgments

## References :

[1]Expressjs.com. [Online]. Available: https://expressjs.com/. [Accessed:   10-Mar-2023].

[2]Render.com. [Online]. Available: https://render.com/. [Accessed: 11-Mar-2023].

[3]Brightspace.com. [Online]. Available: https://dal.brightspace.com/d2l/le/content/250793/viewContent/3445551/View. [Accessed: 11-Mar-2023].

[4]P. Repšys, “Simplest possible way to generate unique ID in Javascript,” Medium, 13-Oct-2021. [Online]. Available: https://paulius-repsys.medium.com/simplest-possible-way-to-generate-unique-id-in-javascript-a0d7566f3b0c. [Accessed: 17-Mar-2023].

[5]	“Express server GET request userId,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/53520401/express-server-get-request-userid. [Accessed: 17-Mar-2023].

[6]	“Body-parser,” Expressjs.com. [Online]. Available: https://expressjs.com/en/resources/middleware/body-parser.html. [Accessed: 17-Mar-2023].