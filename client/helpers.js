const puppeteer = require('puppeteer')

const scrapeUrl = async (url) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  const scrapedData = await(page.content());
  await browser.close();

  await browser.close()
  return scrapedData
}



function findEmbeddedLinks(wallOfText) {
    return arrayOfUrls
}

module.exports = {
    findEmbeddedLinks,
    scrapeUrl
}