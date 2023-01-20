const express = require('express')
const routes = express.Router()
const SpacesPlansController = require('./controllers/SpacesPlansController')

routes.get('/about', SpacesPlansController.about)
routes.get('/:spaceId', SpacesPlansController.index)

module.exports = routes