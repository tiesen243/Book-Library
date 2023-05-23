// Modules
const express = require('express')
const path = require('path')
const { engine, create } = require('express-handlebars')
const menthodOverride = require('method-override')

// Route Modules
const route = require('./routes')

// DB
const db = require('./config/db')

// Connect to DB
db.connect()

// Create App
const app = express()
const port = 3000

// Add Public to App
app.use(express.static('src/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(menthodOverride('_method'))

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
    helpers: {
      shortDesc: function () {
        return this.desc.length >= 110
          ? this.desc.slice(0, 110) + '...'
          : this.desc
      },
      inceaseIndex: (a, b) => a + b,
    },
  }),
)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes init
route(app)

// Show Log
app.listen(port, () => console.log(`Listening on port: ${port}`))
