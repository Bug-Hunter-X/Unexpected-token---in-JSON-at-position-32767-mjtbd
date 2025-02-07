const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

//Uncommon error: Unexpected token } in JSON at position 32767