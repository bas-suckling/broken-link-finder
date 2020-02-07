const linkRequest = require('superagent')
const puppeteer = require('puppeteer');




function scrapeLinks(url) {
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
                return Promise.all(testAllLinks(arrayOfLinks))
                .then(array => {
                  return generateObjArray(arrayOfLinks, array)
                })
              })
            })
            })
          })
        }) 
    })
})
}

const testAllLinks = (array) => {
    let statusArray = array.map((link) => {
            return testLinkStatus(link)
        })
    return statusArray
  }
  
  const testLinkStatus = (link) => {
    return linkRequest
        .get(link)
        .then(res => (res.status))
        .catch(err => (err.status))
  }
  
  const generateObjArray = (linksArray, statusArray) => {
    let array = []
    linksArray.forEach((element, i) => array.push({
        link: linksArray[i],
        status: statusArray[i]
    }))
    return array
  }

module.exports = {
    testAllLinks,
    testLinkStatus,
    generateObjArray,
    scrapeLinks
}