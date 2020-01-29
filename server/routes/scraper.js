const express = require('express')
const router = express.Router()

const request = require ('superagent')

router.get('/:url', (req,res) => {
    let url = req.params.url
    console.log("url is", url )
    request
    .get(url)
    .then(x => res.send(x))
    .catch(err => res.send(err.status))
})

module.exports = router

