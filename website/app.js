/* Global Variables */
const apiKey = 
let baseURL = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=`

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let newDateNode = document.createTextNode(newDate);

//event listener
document.addEventListener('DOMContentLoaded', () => {document.getElementById('generate').addEventListener('click', performAction)});

//callback function
function performAction(e) {
  const newZip = document.getElementById('zip').value;
  document.getElementById('date').appendChild(newDateNode);
  getWeather(baseURL, newZip);
  let userInput = document.getElementById('feelings').value;
  let userInputNode = document.createTextNode(userInput);
  document.getElementById('content').appendChild(userInputNode)
}

//async GET request
const getWeather = async(baseURL, zip)=>{

  const res = await fetch(baseURL+zip) //fetch is getting this data from the URL
  try {
    const data = await res.json(); //
    let tempKelvins = data.main.temp;
    let tempFarenheit = Math.round((tempKelvins - 273.15) * 9/5 + 32);
    let tempFarenheitNode = document.createTextNode(tempFarenheit + ' degrees Farenheit');
    document.getElementById('temp').appendChild(tempFarenheitNode);

  } catch(error) {
    console.log('error', error);
  }
}

//async POST request
const postData = async (url = '', data = {}) => {
  console.log(data);
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(data),
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      } catch(error) {
        console.log('error', error);
      }
}
