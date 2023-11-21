const express = require('express');

const app = express();
const port = 1245;
const host = process.env.HOST || 'localhost';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, host, (error) => {
  if (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
  console.log(`Server listening at http://${host}:${port}`);
});

module.exports = app;
