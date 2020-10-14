Reactron is a clean electron boileplate(or template) that uses React, Electron, Electron-Builder for rapid application development. It just a normal project bootstrapped with [Create React App](https://github.com/facebook/create-react-app) but runs in electron.

    Don't use html5's push state(ReactRouter's BrowserRouter etc.,) because of the relative path issue.

## Usage

Clone this project, edit package.json, start developing.

Run `yarn dev` to start a react development server and open electron app in dev mode.

### `yarn start`

Runs the react in the development mode.<br />
[http://localhost:4000](http://localhost:4000) is the url for development.

### `yarn package`

Build react project and package it using Electron Builder.

### `yarn package-win`

Build react project and package it into windows portable(ia32) using Electron Builder. (Dont't forget placing your icon file to build/icon.ico)

See `package.json` and `public/electron,js` for more details.