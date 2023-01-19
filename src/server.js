const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const routes = require('./routes')
const app = express()
const PORT = 3001

app.use(routes)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(PORT, () =>{
  console.log(`Server is running at http://localhost:${PORT}`)
})