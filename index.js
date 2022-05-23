//comando para inciar o robot node index.js
const puppeteer = require ('puppeteer');

console.log('Bem vindo boot');

 async function robo() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://unsplash.com/'); 
    // acessa a pagina de login
    await page.click('[href="https://unsplash.com/login"]');
  //  await page.screenshot({path: 'example.png'});
    //acessando campos de input
    await page.type('[name="user[email]"]','***Email***'); //EMAIL PARA CADASTRO
    await page.type('[name="user[password]"]','**senha ***');
    await page.click('[type="submit"]'); //usar mais generico possivel para automatizar
    await page.waitForNavigation(); //para esperar um tempo ate carregar tudo na pagina
    //acessar a pagina pra link tem que estar logado 
    await page.goto('https://unsplash.com/photos/Ea0_4fj4vbk');
    await page.click('[title="Like"]');
  //  await browser.close(); ///Para fechar o nevegador

};
robo();