const express = require('express')
const router = express.Router()

const userController = require('../app/controllers/UserController')

router.use('/books', userController.storedBooks)
router.use('/blogs', userController.storedBlog)

module.exports = router
