const express = require('express')
const routes = express.Router();

const OngController = require('./controllers/OngControlller')
const IncindentController = require('./controllers/IncindentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incidents', IncindentController.index)
routes.post('/incidents', IncindentController.create)
routes.delete('/incidents/:id', IncindentController.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes