This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### For Making Sidebar 
### For Vertical sidebar

    <!-- Basics -->
        {
            name: "sidebar.single",
            iconClass: "fab fa-stripe-s",
            routepath: "/single"
        }
    <!-- One Level -->
        {
            name: "sidebar.onelevel",
            iconClass: "fas fa-expand",
            child: [
                {
                    listname: "sidebar.example",
                    routepath: "/ex",
                    shortname: "Ex"
                }
            ]
        }
    <!-- Second level -->
        {
            name: "sidebar.secondlevel",
            iconClass: "fas fa-expand",
            child: [
                {
                    listname: "sidebar.example",
                    iconClass: "fas fa-plus",
                    child: [
                        {
                            listname: "sidebar.example1",
                            routepath: "/ex1",
                            shortname: "Ex"
                        },
                        {
                            listname: "sidebar.example2",
                            routepath: "/ex2",
                            shortname: "Ex"
                        }
                    ]
                }
            ]
        }
### For Horizontal sidebar
  
    <!-- Basics -->
        {
            name: "sidebar.single",
            iconClass: "fab fa-stripe-s",
            routepath: "/single"
        }
    <!-- One Level -->
        {
            name: "sidebar.onelevel",
            iconClass: "fas fa-expand",
            child: [
                {
                    name: "sidebar.example",
                    routepath: "/ex",
                }
            ]
        }
    <!-- Second level -->
        {
            name: "sidebar.secondlevel",
            iconClass: "fas fa-expand",
            child: [
                {
                    name: "sidebar.example",
                    iconClass: "fas fa-plus",
                    child: [
                        {
                            name: "sidebar.example1",
                            routepath: "/ex1",
                        },
                        {
                            name: "sidebar.example2",
                            routepath: "/ex2",
                        }
                    ]
                }
            ]
        }