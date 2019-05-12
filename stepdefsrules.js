let {$, sleep} = require('./funcs');

let sleepTime = 1000;



module.exports = function(){

    this.Given(/^that I am on the game website$/, async function () {
    await helpers.loadPage('http' + '://localhost:3000/game');
  });

    this.When(/^I choose bot against bot and press Börja Spela$/, async function () {
    await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/div/div[2]/button")).click();
    await sleep(sleepTime * 2);
    await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/div/div[2]/div/div[3]")).click();
    await sleep(sleepTime * 2);
    await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/div/input")).sendKeys("Bot1");
    await sleep(sleepTime * 2);
    await driver.findElement(By.xpath("/html/body/div/main/div/div[2]/div/input")).sendKeys("Bot2");
    await sleep(sleepTime * 2);
    await driver.findElement(By.xpath("/html/body/div/main/div/div[3]/button[1]")).click();
  });

    this.Then(/^the bots should follow the rules throughout the game\.$/, {timeout: 60 * 1000}, async function () {
    await sleep(sleepTime * 50);
    await driver.findElement(By.css('.board.shown')).takeScreenshot();
  });

}