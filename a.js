require('chromedriver');  

var webdriver = require('selenium-webdriver');  

var driver = new webdriver.Builder().forBrowser('chrome').build();  

driver.get("https://www.baidu.com");

driver.sleep(20 * 1000).then(function(){  
driver.quit(); 
})
