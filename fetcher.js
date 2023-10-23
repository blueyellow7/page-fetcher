const request = require('request'); // need to send server requests
const fs = require('fs'); // need to writeFile

const argv = process.argv; // to use command line arguements
let arguements = argv.slice(2);
let URL = arguements[0];
let filePath = arguements[1];

// requesting data from URL/domain:
request(URL, (error, response, data) => {
  if (error) {
    console.log('error: ', error);
  }
  
  // writes data that we requested, into file (using its file path)
  // all process within fs.writeFile is asynchronous: 
  fs.writeFile(`${filePath}`, data, (err) => {
    if (err) {
      console.log('error: ', err);
      return;
    } 
    console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${filePath}`);
  });

});