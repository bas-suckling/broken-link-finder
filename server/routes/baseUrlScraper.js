const express = require('express')
const router = express.Router()
const puppeteer = require('puppeteer');
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
  const finalLinks = await arrayFunctions.generateObjArray(data, await arrayFunctions.testAllLinks(data))
  console.log(finalLinks)
  res.json(finalLinks)
})();
}

getBaseUrlContent(url2)
setTimeout(function(){ console.log(data); }, 5000);
 
})

module.exports = router



