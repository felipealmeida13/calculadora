const {Builder, By, Key, until, Button} = require('selenium-webdriver');

(async function testeCalc(){
    let driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get('C:\\Users\\felipe.oliveira\\AluraJS\\calculadorajs\\calculadora.html');
        await driver.findElement(By.id('botao3')).click();
        await driver.findElement(By.id('botao0')).click();
        await driver.findElement(By.id('botaoMult')).click();
        await driver.findElement(By.id('botao1')).click();
        await driver.findElement(By.id('botao0')).click();
        await driver.findElement(By.id('botaoCalc')).click();
        let resultado = await driver.findElement(By.id('resultado')).getText();
        console.log(resultado);

        await driver.get('https://www.google.com.br/');
        await driver.findElement(By.name('q')).sendKeys(resultado + " de esparta" , Key.RETURN);
        await driver.wait(until.titleIs('300 de esparta - Pesquisa Google'), 1000);
        
    }finally{
        await driver.quit();
        
    }
})();