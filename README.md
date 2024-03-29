![GitHub Workflow status](https://github.com/Dominik-Hillmann/brain-rain-react/actions/workflows/website-cicd.yml/badge.svg)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Dominik-Hillmann/brain-rain-react.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Dominik-Hillmann/brain-rain-react/context:javascript)
[![CodeFactor](https://www.codefactor.io/repository/github/dominik-hillmann/brain-rain-react/badge)](https://www.codefactor.io/repository/github/dominik-hillmann/brain-rain-react)
[![Last commit](https://img.shields.io/github/last-commit/Dominik-Hillmann/brain-rain-react)](https://img.shields.io/github/last-commit/Dominik-Hillmann/brain-rain-react)
[![repo size](https://img.shields.io/github/repo-size/Dominik-Hillmann/brain-rain-react)](https://img.shields.io/github/repo-size/Dominik-Hillmann/brain-rain-react)
[![contains](https://img.shields.io/badge/contains-tasty%20spaghetti%20code-informational)](https://img.shields.io/badge/contains-tasty%20spaghetti%20code-informational)
# brain-rain-react

A new website for the BRAINRAIN GbR using React.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Docker commands to start the app
### Build the image
```sh
cd ~/brain-rain-react
sudo docker build -t brain-rain-react:latest .
```
### Build the container
```sh
sudo docker container run --name <name> -p 8000:80 brain-rain-react
```
### Start the container
```sh
sudo docker container start brain-rain-react
```
### Stop the container
```sh
sudo docker container stop brain-rain-react
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run serve`
This command runs the build server. `npm run serve` needs to be used first.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
