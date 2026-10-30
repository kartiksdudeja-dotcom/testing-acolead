const fs = require('fs');
const puppeteer = require('puppeteer');
const reactSnap = require('react-snap');
const { reactSnap: snapConfig, homepage } = require('../package.json');

const browserPath = puppeteer.executablePath();

if (!fs.existsSync(browserPath)) {
  console.warn(`Skipping pre-rendering because Puppeteer's Chromium binary was not found at ${browserPath}.`);
  process.exit(0);
}

const originalLaunch = puppeteer.launch.bind(puppeteer);
puppeteer.launch = async (options) => {
  const browser = await originalLaunch(options);
  const originalClose = browser.close.bind(browser);

  browser.close = async () => {
    let timeoutId;
    await Promise.race([
      originalClose(),
      new Promise((resolve) => {
        timeoutId = setTimeout(() => {
          browser.process()?.kill();
          resolve();
        }, 10000);
      }),
    ]);
    clearTimeout(timeoutId);
  };

  return browser;
};

reactSnap.run({
  publicPath: homepage || '/',
  ...snapConfig,
}).catch((error) => {
  if (error.code === 'ENOENT' && error.message.includes('Failed to launch the browser process')) {
    console.warn('Skipping pre-rendering because Puppeteer could not find its Chromium binary.');
    return;
  }

  console.error('Pre-rendering failed:', error);
  process.exitCode = 1;
});
