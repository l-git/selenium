require('chromedriver');  
const {Builder, By, Key, until} = require('selenium-webdriver');

 (async function example() {
  let driver = new Builder().forBrowser('chrome').build();


  driver.manage().window().maximize();

  //driver.get("http://www.baidu.com");


  try {
    //await driver.get('http://www.google.com/ncr');
    await driver.get('http://www.baidu.com/');
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    //await driver.quit();
  }
})();