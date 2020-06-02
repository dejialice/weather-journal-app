/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let newDateNode = document.createTextNode(newDate);

//event listener
document.addEventListener('DOMContentLoaded', () => {document.getElementById('generate').addEventListener('click', performAction)});

//callback function
async function performAction(e) {
  const newZip = document.getElementById('zip').value;
  document.getElementById('date').appendChild(newDateNode);
  let userInput = document.getElementById('feelings').value;
  let userInputNode = document.createTextNode(userInput);
  document.getElementById('content').appendChild(userInputNode)
  let url = `/all/${newZip}/${userInput}`
  let res = await fetch(url); //shouldn't this be the data? but it isn't showing up as that...
  let data = await res.json();
  let temperature = data.main.temp;//which results on temp being called on undefined
  console.log(temperature)
  let tempNode = document.createTextNode(temperature + ' degrees');
  document.getElementById('temp').appendChild(tempNode);
}

//event listener
document.addEventListener('DOMContentLoaded', () => {document.getElementById('generate').addEventListener('click', postData)});
//is this right? how do I check if anything is being stored in projectData

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
