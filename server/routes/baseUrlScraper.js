const express = require('express')
const router = express.Router()
const puppeteer = require('puppeteer');


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
  res.json(data)
})();
}

getBaseUrlContent(url2)
setTimeout(function(){ console.log(data); }, 15000);
 
})

module.exports = router



