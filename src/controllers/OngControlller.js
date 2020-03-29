const db = require('../database/connection-db')
const generateUniqId = require('../utils/generateUniqId')

module.exports = {
  async index(req, res) {
    const ongs = await db('ongs').select('*')

    return res.json(ongs)
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body
    const id = generateUniqId()

    await db('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })
    return res.json({ id })
  }
}