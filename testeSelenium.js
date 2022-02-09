const {Builder, By, Key, until} = require('selenium-webdriver');

(async function testeCalc(){
    let driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get('C:\\Users\\felipe.oliveira\\AluraJS\\calculadorajs\\calculadora.html');
        await driver.findElement(By.id(botao2)).click();
        await driver.findElement(By.id(botao0)).click();
        await driver.findElement(By.id(botaoMult)).click();
        await driver.findElement(By.id(botao1)).click();
        await driver.findElement(By.id(botao0)).click();
        await driver.findElement(By.id(botaoCalc)).click();

    }finally{
        await driver.quit();
    }
})();