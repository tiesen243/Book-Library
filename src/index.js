// Modules
const express = require('express')
const path = require('path')
const { engine } = require('express-handlebars')

// Route Modules
const route = require('./routes')

// Create App
const app = express()
const port = 3000

// Add Public to App
app.use(express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// HTTP Logger
const morgan = require('morgan')
const req = require('express/lib/request')
const { log } = require('console')
app.use(morgan('combined'))

// Template Engine
app.engine(
  'html',
  engine({
    extname: '.html',
  }),
)
app.set(
          'view engine', 
  'html')
app.set('views', path.join(__dirname, 'resources/views'))

// Routes init
route(app)

app.listen(port, () => console.log(`Listening on port: ${port}`))
