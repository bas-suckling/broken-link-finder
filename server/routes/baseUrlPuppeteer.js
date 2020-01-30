const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.bas-suckling.com');
  let content = await(page.content());
  await browser.close();
  console.log(content)
})();

