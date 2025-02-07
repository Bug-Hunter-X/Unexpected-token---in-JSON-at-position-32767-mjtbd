const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'})); //Increase limit if needed
app.get('/', (req, res) => {
  try {
    //Simulate large JSON response (replace with your actual response)
    const largeJSON = { ... }; 
    res.json(largeJSON);
  } catch (error) {
    console.error('Error processing JSON:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//Alternative solution using a streaming JSON parser (for extremely large files)
// const JSONStream = require('JSONStream');
// const fs = require('fs');
// fs.createReadStream('large_file.json').pipe(JSONStream.parse()).on('data', (data) => {
//   // process data here
// });