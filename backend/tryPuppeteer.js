const Pup = require('puppeteer');

const GetItems = async ()=>{
    const browser = await Pup.launch({
        headless: false,
        defaultViewport: null
    });

    const page = await browser.newPage();
    await page.goto('https://www.fundsexplorer.com.br/ranking');

    
    page.waitForSelector('tbody > tr')
    .then(()=> page.evaluate(()=> {
        let FiisEncontrados = [];
        const linhas = document.querySelectorAll('tbody > tr');
        linhas.forEach(linha =>{
            const colunas = linha.querySelectorAll('td');
            const codigo =  colunas[0].innerText;
            const setor = colunas[1].innerText;
            const precoAtual = colunas[2].innerText;
            const liquidez = colunas[3].innerText.replace(".0", "");
            const dividendo = colunas[4].innerText;
            const dy = colunas[5].innerText;
            const dy12Media = colunas[11].innerText;
            const pvpa = colunas[18].innerText;
            const rentabilidadeTotal = colunas[21].innerText;
            const vacanciaFisica = colunas[23].innerText;
            const vacanciaFinanceira = colunas[24].innerText;
            const qtdeAtivos = colunas[25].innerText.replace(".0", "");
            
            const fii = { 
                codigo, 
                setor,
                precoAtual, 
                liquidez,
                dividendo,
                dy,
                dy12Media,
                pvpa,
                rentabilidadeTotal,
                vacanciaFisica,
                vacanciaFinanceira,
                qtdeAtivos
             };

            FiisEncontrados.push(fii); })
        console.log(FiisEncontrados);
    }))
    .catch((error) => {console.log(error)});
    
    //browser.close(); remote rejected master pre receive hook declined
};

GetItems();

