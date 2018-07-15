const express = require('express');
const properties = require('./properties.json');

const app = express();

app.get('/properties', (req, res) => {
  res.send(properties);
});

app.listen(7000, () => {
  console.log(`Example app listening on port 7000!`);
});
