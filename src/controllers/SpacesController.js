const knex = require('../database')

module.exports = {
  async index(req, res) {
    try {
      const results = await knex('spaces')
        .select('id')
        .withSchema('product_db')
        .limit(1)

      res.json(results)
    } catch(e) {
      console.error(e)
      res.json('Error: '+ e.toString())
    }  
  },

  async about(req, res) {
    res.send('API test integration redshift')
  }
}