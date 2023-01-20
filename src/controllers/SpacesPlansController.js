const knex = require('../database')

module.exports = {
  async index(req, res) {
    try {
      const results = await knex('v_spaces_plans')
        .select('space_id', 'space_plan', 'extended_support')
        .withSchema('product_data')
        .where('space_id', req.params.spaceId)
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