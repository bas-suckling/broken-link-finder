const express = require('express')
const router = express.Router()
const puppeteer = require('puppeteer');
const linkRequest = require('superagent')
const arrayFunctions = require('./linkTest')


router.get('/:url', (req, res) => {
  let url = "https://" + req.params.url

  let response = await Promise.all(getBaseUrlContent(url))

  res.json(response)

})

function  getBaseUrlContent(url) {
  
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const elementHandles = await page.$$('a');
    const propertyJsHandles = await Promise.all(
      elementHandles.map(handle => handle.getProperty('href'))
    );
    const arrayOfLinks = await Promise.all(
      propertyJsHandles.map(handle => handle.jsonValue())
    );
    await browser.close();

    let array = await Promise.all(arrayFunctions.testAllLinks(arrayOfLinks))
      .then(res => {
        return res
      })

    let finalObj = arrayFunctions.generateObjArray(arrayOfLinks, array)
    console.log(finalObj)
    return finalObj

}

module.exports = router