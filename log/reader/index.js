const fs = require('fs');

console.log('starting...');

fs.writeFileSync('files/reder.txt', 'starting...')

setInterval(() => {
  try {
    const data = fs.readFileSync('files/log.txt', 'utf8');
    console.log('from reader', data);
  } catch (err) {
    console.log('no file');
  } 

}, 5000)