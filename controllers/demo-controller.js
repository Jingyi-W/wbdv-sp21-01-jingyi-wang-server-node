
module.exports = (app) => {
  app.get('/', function (req, res) {
    res.send('Hello World')
  })

  const add = (req, res) => {
    const a = req.params['a']
    const b = req.params['b']
    res.send(`${parseInt(a) + parseInt(b)}`)
  }
  app.get('/add/:a/:b', add)

  const subtract = (req, res) => {
    const x = req.query['x']
    const y = req.query['y']
    res.send(`${parseInt(x) - parseInt(y)}`)
  }
  app.get('/subtract', subtract)

}


