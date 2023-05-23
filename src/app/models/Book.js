const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Book = new Schema(
  {
    title: { type: String, required: true, default: 'Untitled', unique: true },
    author: { type: String, required: true, default: 'Unknown' },
    desc: { type: String, required: true, default: 'No description' },
    img: {
      type: String,
      required: true,
      default: 'https://i.imgur.com/2qXsYk3.png',
    },
    slug: { type: String, slug: 'title' },
    url: { type: String, required: true, default: 'https://ln.hako.vn/' },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Book', Book)
