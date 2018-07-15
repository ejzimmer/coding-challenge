# Quick Start #
This app was created with creat-react-app

To run the app, `npm start`.
This will start the app running on localhost:3000, with the API available on localhost:7000

To run tests, `npm test`. 
This will start the tests, running in watch mode.

# The App #
The app consists of four components.

## PropertiesContainer ##
Top-level container, responsible for state management. State management is directly in the component
because using something like Reux would have been complete overkill for a project this small.

The component initially fetches data from the server, then listens for Save and Remove events and updates
the lists accordingly.

## PropertiesList ##
A list of properties, with a given title, and an action that can be performed on all of the properties in
the list (save or remove).

## Property ##
A property, with all the information necessary to display it, plus the action that it can perform. Passing 
in the action like this makes the PropertiesList and Property components reusable across the app.

## ActionButton ##
The button on the property that performs the specified action. Or rather, emits an event corresponding to
the appropriate action. The event is captured by the top-level container, which performs the actual action.

# Test Server #
The given JSON is being served by an Express server (test-server/server.js), running on port 7000.


