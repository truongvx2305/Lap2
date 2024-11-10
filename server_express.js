const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => {
  res.write('<h1>Lab2 - NodeJS</h1>');
  res.write(`<h1>express.js hello world</h1>`);
  res.end();
})

app.get('/', (req, res) => {
  res.send(`expressjs hello world`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})