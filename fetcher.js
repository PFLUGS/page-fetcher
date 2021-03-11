const request = require('request');
const fs = require('fs');
const finalRequest = process.argv.slice(2);


const pageDownload = function(url, filename) {
  console.log(url);
  console.log(filename);
  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    fs.writeFile(filename, body, function(err) {
      if (err) throw err;
      console.log('Saved!');
    });
  });

};

pageDownload(finalRequest[0], finalRequest[1]);