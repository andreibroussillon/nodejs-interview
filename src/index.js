require('dotenv').config();

const express = require('express');
const routes = require('./routes/router')

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Welcome - Server is running');
});

app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;