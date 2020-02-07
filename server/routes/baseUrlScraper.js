const express = require('express')
const router = express.Router()
const puppeteer = require('puppeteer');
const linkRequest = require('superagent')
const arrayFunctions = require('./linkTest')


router.get('/:url', (req, res) => {
  let url = "https://" + req.params.url

  getBaseUrlContent(url).then(response => {
    res.json(response)
  })
})

function getBaseUrlContent(url) {
    return puppeteer.launch()
    .then(browser => {
      return browser.newPage()
      .then(page => {
        return page.goto(url)
        .then(() => {
          return page.$$('a')
          .then(elementHandles => {
            return Promise.all(elementHandles.map(handle => handle.getProperty('href')))
            .then(propertyJsHandles => {
              return Promise.all(propertyJsHandles.map(handle => handle.jsonValue()))
              .then(arrayOfLinks => {
                return browser.close()
                .then(() => {
                  return Promise.all(arrayFunctions.testAllLinks(arrayOfLinks))
                  .then(array => {
                    console.log(array)
                    console.log('array')
                    return arrayFunctions.generateObjArray(arrayOfLinks, array)
                  })
                })
              })
              })
            })
          }) 
      })
  })
}
    

module.exports = router