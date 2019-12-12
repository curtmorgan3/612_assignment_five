# RESTful API with Node and Docker

http://localhost/characters/

Are you a Marvel Comics fan? Connect to this (admittedly small) RESTful API to get the details of your favorite heroes and villains.

## GET Routes
### /characters
Get a list of all characters in the database, their powers and type. 

### /characters/:id
Want to see just one character? Add an ID to the route and get back just the one.

### /characters/type/:type
Pass heroes or villains to get a list of all of each type.

### /characters/type/heroes/:index
Get the list of heroes one by one.

### /characters/type/villains/:index
Get the list of villains one by one. 
