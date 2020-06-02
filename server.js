// Setup empty JS object to act as endpoint for all routes
const fetch = require("node-fetch");
const apiKey = '69cb5eeae6b05dc9b67844b8b7877f00&units=imperial'
let baseURL = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=`
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
app.get('/all/:zip/:userInput', async (req, res) => {
  let zip = req.params.zip;
  let userInput = req.params.userInput
  try {
    const getData = await fetch(baseURL+zip)
    const data = await getData.json();
    res.json(data);
  } catch(error) {
    console.log('error', error);
  }

});

function sendData (request, response) {
  response.send(projectData);
}

const getWeather = async(baseURL, zip)=>{
  let url = '/all/'
}

//POST route

app.post('/addData/:temperature/:newDate/:userInput/', addData) //umm is this the right url? should I be asking for zip, user input and date when

function addData (req, res) {
  let newData = req.body;
  let newEntry = {
    temperature: newData.temperature,
    date: newData.newDate,
    userResponse: newData.userInput
  }
  projectData.push(newEntry)
  console.log(projectData)
}
