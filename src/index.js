const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 3000

app.use(morgan('combined'))
app.get('/home', (req, res) => res.send(`
  <h1>Hello<h1>
`))
app.listen(port, () => console.log(`Listening on port: ${port}`));
