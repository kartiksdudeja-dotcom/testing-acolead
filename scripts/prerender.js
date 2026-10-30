const puppeteer = require('puppeteer');
const reactSnap = require('react-snap');
const { reactSnap: snapConfig, homepage } = require('../package.json');

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
  console.error('Pre-rendering failed:', error);
  process.exitCode = 1;
});
