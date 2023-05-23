const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

const API = process.env.API_URL

async function connect() {
  try {
    await mongoose.connect(API, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connect successfully!!!')
  } catch (error) {
    console.log('Connect failure!!!')
  }
}

module.exports = { connect }
