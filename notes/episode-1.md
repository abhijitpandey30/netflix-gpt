# npx create-react-app netflix-gpt


# Install taiwind
- https://tailwindcss.com/docs/guides/create-react-app

# use Formik - for react for very big React project

- For input box - use State variable or use reference for it - useRef

- Google firebase for Authentication - # https://firebase.google.com/

- https://firebase.google.com/docs/reference/js/?hl=en&authuser=0&_gl=1*1de4y3h*_ga*NjI2MTM0Njc4LjE2OTU5OTU4OTk.*_ga_CW55HF8NVT*MTY5NTk5NTg5OC4xLjEuMTY5NTk5NjIxNy42MC4wLjA.

- npm i firebase
- npm i -g firebase-tools
- firebase login (https://accounts.google.com/o/oauth2/auth?client_id=563584335869-fgrhgmd47bqnekij5i8b5pr03ho849e6.apps.googleusercontent.com&scope=email%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloudplatformprojects.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffirebase%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform&response_type=code&state=903152630&redirect_uri=http%3A%2F%2Flocalhost%3A9005)
- firebase init
- Hosting: Configure files for Firebase Hosting and (optionally) set up Github Action deploys - click spacebar to select and hit enter

- What do you want to use your public directory - "build" - we have build for all file in webpack using create-react-app, like dist in parcel - 
- N
- N
- npm run build
- firebase deploy

# how to navigate firebase
- firebase documentation -> searxh authentication-> web-> pwd authentication - https://firebase.google.com/docs/auth/web/password-auth?hl=en#create_a_password-based_account
- use web modular API

- move auth to central location
- moce user info to redux

- https://firebase.google.com/docs/auth/web/manage-users?hl=en#get_the_currently_signed-in_user
- https://firebase.google.com/docs/reference/js/auth#signout
- https://firebase.google.com/docs/auth/web/manage-users?hl=en#update_a_users_profile

- moving onAuthStateChnage inside header - as it is always present, also it's inside RouterProvider

- TMDB  - login - go to edit profile -> API ->
API Key
4ce9ae229e4bddb5c8845d830368acd6


API Read Access Token
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2U5YWUyMjllNGJkZGI1Yzg4NDVkODMwMzY4YWNkNiIsInN1YiI6IjY1MWIwZmFlOWQ1OTJjMDEwMmMwYzZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zfg-oFxdhIOjlwsdt1ShOHRLZCWz2WN_LP5BYq-H5J4

API is hit twice - due to React.StrictMode - done by react extra rendering to check for any inconsistency between your calls - > Only happens in development mode!! -not a bad thing

- https://developer.themoviedb.org/reference/movie-videos