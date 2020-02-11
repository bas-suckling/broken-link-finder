// this is a test implementation of basic puppeteer functionality

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

getBaseUrl('www.google.com')