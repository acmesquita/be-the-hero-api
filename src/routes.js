const express = require('express')
const routes = express.Router();

const OngController = require('./controllers/OngControlller')

routes.get('/ongs', OngController.store)
routes.post('/ongs', OngController.create)

module.exports = routes