const express = require('express')
const router = express.Router()
const puppeteer = require('puppeteer');
// const scrapeUrl = require('../../client/helpers.js')
// const getBaseUrl = require('./baseUrlPuppeteer')

router.get('/:url', (req, res) => {
  let data
  let url2 = "https://" + req.params.url
  function getBaseUrlContent (url) {(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  let content = await(page.content())
  await browser.close();
  data = content
  // seperateLinks(data)
})();
}

getBaseUrlContent(url2)
// setTimeout(function(){ console.log(data); }, 5000);
 
})


module.exports = router



