const webdriver = require('selenium-webdriver');
const assert = require('assert');
let {$, sleep} = require('./four-with-bot/www/js/funcs');

module.exports = function()
{

 this.Given(/^I am on the site homepage$/, async function () {
   await helpers.loadPage('http' + '://localhost:3000');
 });

 this.Given(/^I click on "Spela" on the "Start" Page$/, async function () {
   await driver.findElement(By.css("#navbarSupportedContent > ul > li:nth-child(2) > a")).click();
 });

 this.When(/^I click on "Namn (2-10 tecken)" Tab$/,  async function () {
   await sleep(4000)
   await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/div/input")).click();
 });

 this.When(/^I type in "username"$/,  async function () {
   await driver.findElement(webdriver.By.name('Namn (2-10 tecken)'));
   pressedKey = 'username';
   await driver.sendKeys(pressedKey);
 });

 this.When(/^I click on the "Börja spela" Tab$/,  async function () {
   await driver.findElement(By.css('body > div > main > div > div:nth-child(5) > button.begin-btn.btn.btn-primary.float-right')).click();
 });

 this.Then(/^the "användarnamn" on the "game" Site should contain the Letters "username"$/,  async function () {
   await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/h3/text()"))
   let usedLetters = await $('.used');
   let contents = await usedLetters.getText();
    contents = contents.split('username')[1];
    assert(contents.includes(pressedKey.toUpperCase()), 'The letter pressed was not added to used letters.');
  await sleep(4000);
 });
};

module.exports = function()
{

 this.Given(/^I am on the site homepage$/, async function () {
   await helpers.loadPage('http' + '://localhost:3000');
 });

 this.Given(/^I click on "Spela" on the "Start" Page$/, async function () {
   await driver.findElement(By.css("#navbarSupportedContent > ul > li:nth-child(2) > a")).click();
 });

 this.When(/^I click on "Namn (2-10 tecken)" Tab$/,  async function () {
   await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/div/input")).click();
 });

 this.When(/^I type in "1"$/,  async function () {
   await driver.findElement(webdriver.By.name('Namn (2-10 tecken)'));
   pressedKey = '1';
   await driver.sendKeys(pressedKey);
 });

 this.When(/^I click on the "Börja spela" Tab$/,  async function () {
   await driver.findElement(By.css('body > div > main > div > div:nth-child(5) > button.begin-btn.btn.btn-primary.float-right')).click();
 });

 this.Then(/^the "användarnamn" on the "game" Site should contain the Letters "1"$/,  async function () {
   await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/h3/text()"))
   let usedLetters = await $('.used');
   let contents = await usedLetters.getText();
    contents = contents.split('1')[1];
    assert(contents.includes(pressedKey.toUpperCase()), 'The letter pressed was not added to used letters.');
  await sleep(4000);
 });
};

module.exports = function()
{

 this.Given(/^I am on the site homepage$/, async function () {
   await helpers.loadPage('http' + '://localhost:3000');
 });

 this.Given(/^I click on "Spela" on the "Start" Page$/, async function () {
   await driver.findElement(By.css("#navbarSupportedContent > ul > li:nth-child(2) > a")).click();
 });

 this.When(/^I click on "Namn (2-10 tecken)" Tab$/,  async function () {
   await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/div/input")).click();
 });

 this.When(/^I type in "!"$/,  async function () {
   await driver.findElement(webdriver.By.name('Namn (2-10 tecken)'));
   pressedKey = '!';
   await driver.sendKeys(pressedKey);
 });

 this.When(/^I click on the "Börja spela" Tab$/,  async function () {
   await driver.findElement(By.css('body > div > main > div > div:nth-child(5) > button.begin-btn.btn.btn-primary.float-right')).click();
 });

 this.Then(/^the "användarnamn" on the "game" Site should contain the Letters "!"$/,  async function () {
   await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/h3/text()"))
   let usedLetters = await $('.used');
   let contents = await usedLetters.getText();
    contents = contents.split('!')[1];
    assert(contents.includes(pressedKey.toUpperCase()), 'The letter pressed was not added to used letters.');
  await sleep(4000);
 });
};

module.exports = function()
{

 this.Given(/^I am on the site homepage$/, async function () {
   await helpers.loadPage('http' + '://localhost:3000');
 });

 this.Given(/^I click on "Spela" on the "Start" Page$/, async function () {
   await driver.findElement(By.css("#navbarSupportedContent > ul > li:nth-child(2) > a")).click();
 });

 this.When(/^I click on "Namn (2-10 tecken)" Tab$/,  async function () {
   await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/div/input")).click();
 });

 this.When(/^I type in "username1!"$/,  async function () {
   await driver.findElement(webdriver.By.name('Namn (2-10 tecken)'));
   pressedKey = 'username1!';
   await driver.sendKeys(pressedKey);
 });

 this.When(/^I click on the "Börja spela" Tab$/,  async function () {
   await driver.findElement(By.css('body > div > main > div > div:nth-child(5) > button.begin-btn.btn.btn-primary.float-right')).click();
 });

 this.Then(/^the "användarnamn" on the "game" Site should contain the Letters "username1!"$/,  async function () {
   await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/h3/text()"))
   let usedLetters = await $('.used');
   let contents = await usedLetters.getText();
    contents = contents.split('username1!')[1];
    assert(contents.includes(pressedKey.toUpperCase()), 'The letter pressed was not added to used letters.');
  await sleep(4000);
 });
};
