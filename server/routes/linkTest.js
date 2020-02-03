const express = require('express')
const router = express.Router()
// const scrapeUrl = require('../../client/helpers.js')
// const getBaseUrl = require('./baseUrlPuppeteer')

router.get('/:url', (req, res) => {
  let url = 'https://' + req.params.url
  res.sendStatus(url)
})