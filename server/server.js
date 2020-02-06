const path = require('path')
const express = require('express')
const scraper = require('./routes/baseUrlScraper')
// const linkTest = require('./routes/linkTest')
const server = express()

server.use('/api/v1/scraper', scraper)
// server.use('/api/v1/linktester', linkTest)

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
