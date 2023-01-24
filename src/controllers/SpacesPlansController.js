const knex = require('../database')

async function getSpacePlanBySpaceId(spaceId) {
  try {
    return await knex('v_spaces_plans')
      .select('space_id', 'space_plan', 'extended_support')
      .withSchema('product_data')
      .where('space_id', spaceId)
      .limit('1')
  } catch(e) {
    throw e
  }
}

module.exports = {
  async index(req, res) {
    try {
      res.json(await getSpacePlanBySpaceId(req.params.spaceId))
    } catch (e) {
      console.error(e)
      res.json('Error: '+ e.toString())
    }
  },
  
  async about(req, res) {
    res.send('API test integration redshift')
  }
}