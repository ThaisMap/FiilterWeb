const Puppeteer = require ('puppeteer');

module.exports = {
    async getFiis() {
        const browser = await Puppeteer.launch({
            headless: true,
            defaultViewport: null
        });
        const page = await browser.newPage();

        await page.goto('https://www.fundsexplorer.com.br/ranking');
   
        // Scrape
        const result = await page.evaluate(() => {
            const FiisEncontrados = [];
            
            function MoneyParse(valor)
            {
                if (valor == "N/A")
                    return -1;
            return parseFloat(valor.replace("R$ ", "").replace(".", "").replace(",", "."));
            }

            function PercentParse(valor)
            {
                if (valor == "N/A")
                    return -999;
                return parseFloat(valor.replace("%", "").replace(".", "").replace(",", "."));
            } 

            document.querySelectorAll('tbody > tr').forEach(
                linhas => {
                    linha = linhas.querySelectorAll('td');
                    const codigo =  linha[0].innerText;
                    const setor = linha[1].innerText;
                    const precoAtual = MoneyParse(linha[2].innerText);
                    const liquidez =  parseInt(linha[3].innerText.replace(".0", ""));
                    const dividendo = MoneyParse(linha[4].innerText);
                    const dy = PercentParse(linha[5].innerText);
                    const dy12Media = PercentParse(linha[11].innerText);
                    const pvpa = PercentParse(linha[18].innerText);
                    const rentabilidadeTotal = PercentParse(linha[21].innerText);
                    const vacanciaFisica = PercentParse(linha[23].innerText);
                    const vacanciaFinanceira =  PercentParse(linha[24].innerText);
                    const qtdeAtivos = parseInt(linha[25].innerText.replace(".0", ""));
                    
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
                     
                    
                    FiisEncontrados.push(fii); 
                    }
                );
            return FiisEncontrados; // retorna para o valor de const result
        });
        
        browser.close();
        return result;  // retorna para função exportada
    },

    async getSomeFiis() {
        const browser = await Puppeteer.launch({
            headless: true,
            defaultViewport: null
        });
        const page = await browser.newPage();

        await page.goto('https://www.fundsexplorer.com.br/ranking');
   
        // Scrape
        const result = await page.evaluate(() => {
            const FiisEncontrados = [];
            
            function MoneyParse(valor)
            {
                if (valor == "N/A")
                    return -1;
            return parseFloat(valor.replace("R$ ", "").replace(".", "").replace(",", "."));
            }

            function PercentParse(valor)
            {
                if (valor == "N/A")
                    return -999;
                return parseFloat(valor.replace("%", "").replace(".", "").replace(",", "."));
            } 

            
            document.querySelectorAll('tbody > tr').forEach(
                linhas => {
                    if(FiisEncontrados.length <= 10){
                        linha = linhas.querySelectorAll('td');
                        const codigo =  linha[0].innerText;
                        const setor = linha[1].innerText;
                        const precoAtual = MoneyParse(linha[2].innerText);
                        const liquidez =  parseInt(linha[3].innerText.replace(".0", ""));
                        const dividendo = MoneyParse(linha[4].innerText);
                        const dy = PercentParse(linha[5].innerText);
                        const dy12Media = PercentParse(linha[11].innerText);
                        const pvpa = PercentParse(linha[18].innerText);
                        const rentabilidadeTotal = PercentParse(linha[21].innerText);
                        const vacanciaFisica = PercentParse(linha[23].innerText);
                        const vacanciaFinanceira =  PercentParse(linha[24].innerText);
                        const qtdeAtivos = parseInt(linha[25].innerText.replace(".0", ""));
                        
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
                        
                        
                        FiisEncontrados.push(fii); 
                    }
                }
            );
            return FiisEncontrados; // retorna para o valor de const result
        });
        
        browser.close();
        return result;  // retorna para função exportada
    },


    async getSectors(){
        const browser = await Puppeteer.launch({
            headless: true,
            defaultViewport: null
        });
        const page = await browser.newPage();

        await page.goto('https://www.fundsexplorer.com.br/ranking');
        const result = await page.evaluate(() => {
            const  setores = [];

            document.querySelectorAll(
                '#table-filters > span:nth-child(1) > div > ul > li > a > label > input[type=checkbox]')
                .forEach(
                    setor =>{
                        setores.push(setor.getAttribute('value'))
                    }
                );

                setores.shift();
                return setores;
        });

        browser.close();
        return result;
    },
    
};


