const express = require('express')
const router = express.Router()
const scraperFunctions = require('./scraperFunctions')

//array will have the format [{link:'www.someurl.com', status:'100'}]

router.get('/:url', (req, res) => {
  let url = "https://" + req.params.url
  scraperFunctions.scrapeLinks(url).then(response => {
    res.json(response)
  })
})


    

module.exports = router