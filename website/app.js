/* Global Variables */
const userInfo = {};
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let newDateNode = document.createTextNode(newDate);

//event listener
document.getElementById('generate').addEventListener('click', performAction);

//callback function
async function performAction(e) {
  const newZip = document.getElementById('zip').value;
  document.getElementById('date').appendChild(newDateNode);
  let userInput = document.getElementById('feelings').value;
  let userInputNode = document.createTextNode(userInput);
  document.getElementById('content').appendChild(userInputNode)
  let url = `/all/${newZip}/${userInput}`
  let res = await fetch(url);
  let data = await res.json();
  console.log(data)
  let temperature = data.main.temp;
  console.log(temperature)
  let tempNode = document.createTextNode(temperature + ' degrees');
  document.getElementById('temp').appendChild(tempNode);
  userInfo.temp = temperature;
  userInfo.zip = newZip;
  userInfo.feelings = userInput;
  postData();
}

//async POST request
async function postData() {
    let url = '/addData';
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(userInfo),
    });

      try {
        console.log('success!');
      } catch(error) {
        console.log('error', error);
      }
}
