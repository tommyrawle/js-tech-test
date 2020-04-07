# Sky Betting & Gaming Tech Test Submission

## Dev Stack choices

This app has been made using the **React** library along with **React-Router** for routing and **Redux** for app state management. React hooks have also been used to give local state to components when that state does not need to be used elsewhere. I've used the **Reselect** library to create selectors for deriving data from state where possible. The majority of styling has been done using **Styled Components** so that styles do not accidentally leak across components.

The app has been set up using custom webpack scripts as opposed to create-react-app. Even though create react app would have been sufficient for this task, I decided to create my own custom set up because I thought it would best show my webpack knowledge as well as reflect a real life project with as little bloat as possible.

Similarly, choosing Redux for state management might be seen as overkill for such a small app however I thought using it would demonstrate my experience of state management in more complex applications.

## Test library and utility choice

The app has been tested using Jest and Enzyme as they work great together for testing React apps. I've put a lot of time into the testing however the tests are by no means extensive and in a real-world project I'd expect them to be much more detailed and robust.


## Getting Started

### Installing

1. Fork and Clone this repository then `cd` into it

```
$ git clone <your fork's url>
$ cd js-tech-test
```

2. Install all package dependencies

```
$ npm install
```

### Running the Websocket Server

Make sure you have Docker installed on your system. Once this is done you will be able to start up the websocket server with `docker-compose up`.

```
$ docker-compose up
```

### Running the app

Once everything is installed and the server has started, you can run the app locally

```
$ npm start
```

This will open up a new browser tab with the app running on localhost:8080

### Testing

You may wish to run the jest tests to check that they're all passing. To do so simply run `npm test`

```
$ npm test
```

### Build

Although it's not likely you will need to run a production build, you may do so by running `npm build`. You will find the produced files in the `dist` folder. Once you run npm start again, these production files will be deleted. In a real project this would ensure no stale production files were accidentally deployed.

```
$ npm build
```

## Final note

I've completed tasks 1 & 2.
Thank you for taking the time to look through my submission!
