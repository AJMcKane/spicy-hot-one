# Control Panel Demo
Straightforward control panel example utilising bootstrap and custom styling.

Once running you'll need to login to view the control panel.
Click the Login button and then enter (case-sensitive)
Either:
* DF
OR 
* Heart

This will pretend like we've talked to an auth server and set our user state to the preconfigured setup.

The app is powered by React, React-router, Bootstrap, React-redux and packaged by WebPack.

Notes: 
Style changing via inline style has been done for demonstration purposes, in a true white-labelled product, we'd 
simply target a remote CSS file based on user context. 

Open Weather API Key - Keys should never be stored in FE apps, in a real system we'd have a middleware api with auth on in in order to carry out this action. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode on web-pack-dev-server.<br />
Should auto open in the browser, else open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `npm run test`

Runs example component tests using jest, enzyme and redux mock store 

### `npm run build:dev`

Builds the app for dev to the /dist/ folder.

### `npm run lint`

Checks the project for code styling.
