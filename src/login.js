const puppeteer = require('puppeteer');

async function login() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://quotes.toscrape.com/');


  await page.click('a[href="/login"]');
  await page.focus('#username');
  await page.keyboard.type('user');
  await page.focus('#password');
  await page.keyboard.type('dskas98d023nco823');
  await page.click('input[value="Login"]');

  await page.evaluate(() => {
    window.alert('Você está logado!');
  });
};

login();