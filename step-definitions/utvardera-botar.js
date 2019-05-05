let { $, sleep } = require('./funcs');




module.exports = function () {
    var spelplan1
    var spelplan2
    var match


    this.Given(/^två matcher spelade med två dumbot$/,{timeout: 2* 60 * 1000}, async function () {
        // Ladda spel sida
        await helpers.loadPage('http' + '://localhost:3000/game');

        // Sätt namn spelare 1 till DUM1
        await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/div/input")).sendKeys("DUM1");

        // Sätt typ spelare 1 till Dum Bot
        await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/div/div[2]/button")).click();
        await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/div/div[2]/div/div[4]")).click();
        
        // Sätt namn spelare 1 till DUM1
        await driver.findElement(By.xpath("/html/body/div/main/div/div[2]/div/input")).sendKeys("DUM2");

        // Sätt typ spelare 1 till Dum Bot
        await driver.findElement(By.xpath("/html/body/div/main/div/div[2]/div/div[2]/button")).click();
        await driver.findElement(By.xpath("/html/body/div/main/div/div[2]/div/div[2]/div/div[4]")).click();
        
        // Klicka på börja spela
        await driver.findElement(By.xpath("/html/body/div/main/div/div[3]/button[1]")).click();
        
        // Vänta på att spelet är slut
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div[1]/div/button")),60000);

        // Kopiera bild på spelplan för spel 1
        spelplan1 = await driver.findElement(By.xpath("/html/body/div/main/div/div[2]")).takeScreenshot()

        // klicka spela igen
        await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/div/button")).click();

        // klicka spela
        await driver.findElement(By.xpath("/html/body/div/main/div/div[3]/button[1]")).click();

        // Vänta på att andra spelet är slut
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div[1]/div/button")));

        // Kopiera bild på spelplan för spel 2
        spelplan2 = await driver.findElement(By.xpath("/html/body/div/main/div/div[2]")).takeScreenshot()




    });
    this.Given(/^två matcher spelade med två bot$/,  {timeout: 2* 60 * 1000}, async function () {
        // Ladda spel sida
        await helpers.loadPage('http' + '://localhost:3000/game');

        // Sätt namn spelare 1 till SMART1
        await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/div/input")).sendKeys("SMART1");

        // Sätt typ spelare 1 till Bot
        await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/div/div[2]/button")).click();
        await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/div/div[2]/div/div[3]")).click();
        
        // Sätt namn spelare 2 till SMART2
        await driver.findElement(By.xpath("/html/body/div/main/div/div[2]/div/input")).sendKeys("SMART2");
        
        // Sätt typ spelare 2 till Bot
        await driver.findElement(By.xpath("/html/body/div/main/div/div[2]/div/div[2]/button")).click();
        await driver.findElement(By.xpath("/html/body/div/main/div/div[2]/div/div[2]/div/div[3]")).click();

        // Klicka på börja spela
        await driver.findElement(By.xpath("/html/body/div/main/div/div[3]/button[1]")).click();

        // Vänta på att spelet är slut
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div[1]/div/button")),60000);

        // Kopiera bild på spelplan för spel 1
        spelplan1 = await driver.findElement(By.xpath("/html/body/div/main/div/div[2]")).takeScreenshot()

        // klicka spela igen
        await driver.findElement(By.xpath("/html/body/div/main/div/div[1]/div/button")).click();

        // Klicka på börja spela
        await driver.findElement(By.xpath("/html/body/div/main/div/div[3]/button[1]")).click();

        // Vänta på att spelet är slut
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div[1]/div/button")));

        // Kopiera bild på spelplan för spel 2
        spelplan2 = await driver.findElement(By.xpath("/html/body/div/main/div/div[2]")).takeScreenshot()

    
    });


    this.When(/^jag jämnför spelplanerna$/, function () {
        // Jämnför spelplanerna för att se om de är lika
        match = spelplan1 === spelplan2
    });


    this.Then(/^då ska de vara olika$/, function () {
        // Förvänta oss att de är olika
        expect(match).to.be.false;
    });


}