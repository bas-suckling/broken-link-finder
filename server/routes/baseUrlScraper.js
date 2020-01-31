const express = require('express')
const router = express.Router()
const puppeteer = require('puppeteer');

const request = require ('superagent')

// router.get('/:url', (req,res) => {
//     let url = req.params.url
//     console.log("url is", url )
//     request
//     .get(url)
//     .then(x => res.send(x))
//     .catch(err => res.send(err.status))
    
// })

router.get('/:url', (req, res) => {
    let url = req.params.url
    content = getBaseUrl(url)
    .then(content => res.send(content))
} )

function getBaseUrl (url) {(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    let content = await(page.content());
    await browser.close();
    return content
  })();
  }
module.exports = router

