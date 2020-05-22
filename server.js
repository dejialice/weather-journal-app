// Setup empty JS object to act as endpoint for all routes
projectData = {};

//routes are all the different pages in a website for the client side
//routes actions: read info - ex. about page, post - ex. forms, edit and delete

// Require Express to run server and routes
var cors = require('cors');
const express = require('express');

// Start up an instance of app

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 8000;
const server = app.listen(port, listening);

function listening() {
  console.log('server running');
  console.log(`running on localhost: ${port}`);
}

//GET route
app.get('/all', sendData); //gets all routes

function sendData (request, response) {
  response.send(projectData);
}

//POST route

app.post('/addData', addData)

function addData (req, res) {
  let newData = req.body;
  let newEntry = {
    temperature: newData.temperature,
    date: newData.date,
    userResponse: newData.userResponse
  }
  projectData.push(newEntry)
}
