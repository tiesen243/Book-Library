const Book = require('../models/Book')

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require('../../util/mongoose')

class UserController {
  // [GET] /user/book
  storedBooks(req, res, next) {
    Book.find({})
      .then((books) =>
        res.render('user/stored-books', {
          books: mutipleMongooseToObject(books),
        }),
      )
      .catch((err) => res.render('notFound'))
  }

  storedBlog(req, res, next) {
    res.render('notFound')
  }
}

module.exports = new UserController()
