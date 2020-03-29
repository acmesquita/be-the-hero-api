const express = require('express')
const routes = express.Router()
const { celebrate, Segments, Joi } = require('celebrate')

const OngController = require('./controllers/OngControlller')
const IncindentController = require('./controllers/IncindentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().regex(new RegExp('[0-9]')),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), OngController.create)

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number().min(1).positive()
  })
}), IncindentController.index)
routes.post('/incidents', IncindentController.create)
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncindentController.delete)

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
}), ProfileController.index)

module.exports = routes