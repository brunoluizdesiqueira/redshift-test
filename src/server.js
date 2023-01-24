const express = require('express')
const cors = require('cors');
require('dotenv').config()
const routes = require('./routes')
const app = express()
const PORT = 3001

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
})
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(routes)

app.listen(PORT, () =>{
  console.log(`Server is running at http://localhost:${PORT}`)
})