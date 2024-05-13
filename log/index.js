const rndstring = require("randomstring")
const express = require('express');
const app = express();
const axios = require('axios');
const fs = require('fs');

const getNew = () => `${new Date()} ${str}`

const str = rndstring.generate(10)
let stamp_string = getNew()

setInterval(async () => {
  stamp_string = getNew()
  //console.log('writer:', stamp_string)
  try{
    const response = await axios.get('http://ping-pong-svc/pings')
    console.log('response:', response.data)
    stamp_string = stamp_string + '<br/>' + JSON.stringify(response.data)
    const file = fs.readFileSync('./information.txt', 'utf8')

    stamp_string = stamp_string + '<br/>' + process.env.MESSAGE + '<br/>' + file
  
    console.log('stamp_string:', stamp_string)
  } catch (error) {
    console.log('error:', error)
    //stamp_string = stamp_string + '<br/>' + 'ERROR'  
  }

}, 5000)

app.get('/stamp', (req, res) => {
  res.send(stamp_string);
});

app.get('/healthz', async (req, res) => {
  const response = await axios.get('http://ping-pong-svc/pings')
  const status = response.status
  res.status(status).send({ data: status<400 ? 'OK' : 'ERROR'});
});

app.get('*', (req, res) => {
  res.send(`log output: route not found: ${req.originalUrl}`);
});

PORT = 3000

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});