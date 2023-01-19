const express = require('express')
const routes = express.Router()
const SpacesController = require('./controllers/SpacesController')

routes.get('/about', SpacesController.about)
routes.get('/', SpacesController.index)

module.exports = routes