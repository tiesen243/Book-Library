// Modules
const express = require('express')
const path = require('path')
const { engine } = require ('express-handlebars')

// Create App
const app = express()
const port = 3000

// Add Public to App
app.use(express.static(path.join(__dirname, './public')))

// HTTP Logger
const morgan = require('morgan')
app.use(morgan('combined'))


// Template Engine
app.engine('html', engine({
  extname: '.html'
}))
app.set('view engine', 'html')
app.set("views", path.join(__dirname, 'resource/views'))

// Route
app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});


app.listen(port, () => console.log(`Listening on port: ${port}`))


