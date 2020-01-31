// test file to see if I can get puppeteer to render a web page before I get the links.

const puppeteer = require('puppeteer');

function getBaseUrl (url) {(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  let content = await(page.content());
  await browser.close();
  console.log(content)
})();
}

module.exports = {
    getBaseUrl
}