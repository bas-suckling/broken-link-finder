const express = require('express')
const router = express.Router()
// const scrapeUrl = require('../../client/helpers.js')
// const getBaseUrl = require('./baseUrlPuppeteer')

router.get('/:url', (req, res) => {
  let url = req.params.url
  console.log('url is', url)
  const scrapedPage = new Promise((resolve, reject) => {
    getBaseUrlContent(url)
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('Medium scrape failed'))
  })
    
  Promise.all(scrapedPage)
    .then(data => {
      console.log(data)
    })
    .catch(err => res.status(500).send(err))
})

module.exports = router

const puppeteer = require('puppeteer');

function getBaseUrlContent (url) {(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  let content = await(page.content());
  await browser.close();
  return(content)
})();
}