const request = require('supertest')
const app = require('../../src/app')
const db = require('../../src/database/connection-db')

describe('Ong', () => {
  beforeEach(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
  });

  afterAll(async () => {
    await db.destroy()
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: "PIPA",
      email: "contato@pipa.com.br",
      whatsapp: "11123456789",
      city: "Teresina",
      uf: "PI"
    })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})