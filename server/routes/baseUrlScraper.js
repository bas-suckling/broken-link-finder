const express = require('express')
const router = express.Router()
const {scrapeUrl} = '../../client/helpers.js'
// const request = require ('superagent')

router.get('/:url', (req, res) => {
  let url = toString(req.params.url)
  console.log('url is', url)
  const scrapedPage = new Promise((resolve, reject) => {
    scrapeUrl(url)
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('Page scrape failed', err))
  })


  Promise.all(scrapedPage)
    .then(data => {
      console.log(data)
    })
    .catch(err => res.status(500).send(err))
})


module.exports = router

