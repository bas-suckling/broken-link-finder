const express = require('express')
const router = express.Router()
const puppeteer = require('puppeteer');
const linkRequest = require('superagent')
const arrayFunctions = require('./linkTest')


router.get('/:url', (req, res) => {
  let data
  let url2 = "https://" + req.params.url
  function getBaseUrlContent (url) {(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const elementHandles = await page.$$('a');
      const propertyJsHandles = await Promise.all(
        elementHandles.map(handle => handle.getProperty('href'))
      );
    
      const hrefs2 = await Promise.all(
        propertyJsHandles.map(handle => handle.jsonValue())
      );
    await browser.close();
    data = hrefs2
   let stats = await Promise.all(testAllLinks(data))
   .then(res => console.log(res))
  //  res.send(stats)
   res.send(data)
    
    
  })();



}

getBaseUrlContent(url2)
// setTimeout(function(){ console.log(data); }, 5000);
 
})

const testAllLinks = (array) => {
  console.log(array)
  let statusArray = array.map((link) => {
          return testLinkStatus(link)
      })
      setTimeout(function(){ console.log(statusArray); }, 5000);
  return statusArray
}

const testLinkStatus = (link) => {
  return linkRequest
      .get(link)
      .then(res => (res.status))
      .catch(err => (err.status))
}

module.exports = router



