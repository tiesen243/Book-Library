const Book = require('../models/Book')
const { mongooseToObject } = require('../../util/mongoose')

class BookController {
  // [GET] /books/:slug -- Show book detail
  show(req, res, next) {
    Book.findOne({ slug: req.params.slug })
      .then((book) =>
        res.render('books/show', { book: mongooseToObject(book) }),
      )
      .catch((err) => res.render('notFound'))
  }

  // [GET] /books/create -- Create book
  create(req, res, next) {
    res.render('books/create')
  }

  // [POST] /books/store -- Store book
  store(req, res, next) {
    const book = new Book(req.body)
    book
      .save()
      .then(() => res.redirect('/home'))
      .catch((err) => res.render('notFound'))
  }

  // [GET] /books/:id/edit -- Edit book
  edit(req, res, next) {
    Book.findById(req.params.id)
      .then((book) =>
        res.render('books/edit', { book: mongooseToObject(book) }),
      )
      .catch((err) => res.render('notFound'))
  }

  // [PUT] /books/:id -- Update book
  update(req, res, next) {
    Book.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/user/books'))
      .catch((err) => res.render('notFound'))
  }
}

module.exports = new BookController()
