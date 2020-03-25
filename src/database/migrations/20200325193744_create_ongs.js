exports.up = function (knex) {

  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary()
    table.string('name').notNullble()
    table.string('email').notNullble()
    table.string('whatsapp').notNullble()
    table.string('cidade').notNullble()
    table.string('uf', 2).notNullble()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('ongs')
}
