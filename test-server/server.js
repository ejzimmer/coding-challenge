const express = require('express');
const properties = require('./properties.json');

const app = express();

app.get('/properties', (req, res) => {
  res.send(properties);
});

app.use(express.static('public'));

app.listen(7000, () => {
  console.log(`Example app listening on port 7000!`);
});
