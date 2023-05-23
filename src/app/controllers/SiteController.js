const Book = require('../models/Book')

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require('../../util/mongoose')

class SiteController {
  // [GET] /home
  home(req, res) {
    Book.find({})
      .then((books) => {
        res.render('home', {
          books: mutipleMongooseToObject(books),
        })
      })
      .catch((err) => res.render('notFound'))
  }

  // [GET] /search
  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteController()
