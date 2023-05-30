# This is code example

`burger-frontend` was done as a react demo showcasing how a frontend for a burger rating system could be build using 3-4 hours.  
Note: The restaurants are placed in Billund. If you accept to share your location you have to move the map to Billund to see them.

# How to run

The app is easy to run locally. Just run `npm i` followed by `npm start`.

## Used libraries

- styled-components: Used for styling components.
- leaflet: Used for displaying a map.
- craco: Used for updating CRA's webpack config.
- uppy: Used for handling File Upload.
- MUI: Used as design system.


## Overall architecture and hosting

The app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with minimal changes.  
Craco was added to be able to update the webpack configuration without having to eject. It was needed because styled-components was used instead of emotion.js. 
Ideally a hook should be used, that triggers on every commit to main, make a new build by running `npm run build` and use the result on a static file host.  
E.g. Azure's [Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static) would be an easy way of getting started.


## TODOs

There are many features that could be added.  
- [ ] Real Backend (Obviously)
- [ ] Add Tests (!)
- [ ] User Login
- [ ] Features: Add restaurant, CRUD review, See all Reviews etc.

## Backend

There is very little interaction with a potential backend in this app.  
All needed data is fetched when the app loads.  
Since the user can add ratings, this has to be handled too. This includes handling of image uploads.  
For the purpose of this example, I have mocked the server.

## Security

The data in the app is open for everyone. Ideally there would be a login, so data could be attached to users and thereby be verified.  
Adding a user layer was out of scope for this app. This would enable users to delete (own!) reviews etc, maybe even make private reviews that are hidden from public.

## Scaling

A lot can be improved to make the app scale better. It helps a lot, that the app is so simple.  
Initially fetching *all* data is definitely somethign that can be improved. Ideally it will only fetch data that is within the users viewport.  

## State

To keep data handling easy, Context has been used for state. It is set initially and is updated through dispatched actions where needed.

## Data Structure

The data structure is kept as simple as possible. All data is held in an array of Restaurant-objects:
![Data Structure](/Data.png?raw=true)