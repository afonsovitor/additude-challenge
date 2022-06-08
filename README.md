# Additude Challenge

## In order to setup and start the project:
1) Open any console and go to the folder the project has been downloaded to
2) Run **npm install**
3) Run **npm run start**

## API Limitations
1) The API didn't have the possibility to retrieve a single user (for example, getUserById). In order to bypass this issue, the application will make an API call to retrieve the data and save the seed value (provided by the API) in the session storage. When a user clicks on a user row in the list, the application will make another API call with this saved seed (which will provide the exact same call as before) and filter the results by its ID, providing a detailed page with the selected user
2) In some users provided by the API, the ID comes null, so the detailed page won't work. An error is provided to the user if that happens
