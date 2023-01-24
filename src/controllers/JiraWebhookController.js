module.exports = {
  async issueCreate(req, res) {
    try {
      const body = await req.body
      console.log(body)
      res.end()
    } catch(e) {
      console.error(e)
      res.json('Error: '+ e.toString())
    }  
  }
}