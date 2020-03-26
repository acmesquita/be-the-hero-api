const db = require('../database/connection-db')

module.exports = {

  async create(req, res) {
    const { id } = req.body

    const ong = await db('ongs').where('id', id).select('name').first()

    if (!ong) {
      return res.status(400).json({ msg: 'Ong inválida' })
    }

    return res.json(ong)
  }

}