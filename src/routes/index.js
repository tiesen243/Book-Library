const newsRouter = require('./news')
const userRouter = require('./user')
const booksRouter = require('./books')
const siteRouter = require('./site')

function route(app) {
  app.use('/news', newsRouter)
  app.use('/user', userRouter)
  app.use('/books', booksRouter)
  app.use('/', siteRouter)
}

module.exports = route
