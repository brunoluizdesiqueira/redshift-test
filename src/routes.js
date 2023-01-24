const express = require('express')
const routes = express.Router()
const SpacesPlansController = require('./controllers/SpacesPlansController')
const JiraWebhookController = require('./controllers/JiraWebhookController')

routes.get('/about', SpacesPlansController.about)
routes.get('/:spaceId', SpacesPlansController.index)
routes.post('/issueCreate', JiraWebhookController.issueCreate)

module.exports = routes