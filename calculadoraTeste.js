const {Builder, By, Key, until} = require('selenium-webdriver');

let cotacao;
let resultado;
let comp1;
let comp2;
let comp3;
let comp4;

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('cotação dolar', Key.RETURN);
    await driver.wait(until.titleIs('cotação dolar - Pesquisa Google'), 1000);
    cotacao = await driver.findElement(By.className('DFlfde SwHCTb')).getText();
    console.log(cotacao);
    cotacao = cotacao.split('');
    console.log(cotacao);
    console.log(cotacao.length);
    for (let index = 0; index < cotacao.length; index++) {
        const element = cotacao[index];
        

    }
    
    

    //await driver.get('C:\\Users\\felipe.oliveira\\AluraJS\\calculadorajs\\calculadora.html');


  } finally {
    await driver.quit();
  }
})();
        
        
        
        
        
        
        
       