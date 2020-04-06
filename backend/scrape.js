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

    async getStaticInfo(fiis){
        const browser = await Puppeteer.launch({
            headless: false,
            defaultViewport: null
        });
        
        fiis.forEach(async fii => {       
            const page = await browser.newPage();
            await page.goto(`https://www.fundsexplorer.com.br/funds/${fii.codigo}`);
            await page.waitForSelector('li > div.text-wrapper > span.description');
            const result = await page.evaluate(() => {
                const info = document.querySelectorAll('li > div.text-wrapper > span.description');
                const gestao = info[5].innerText;
                const publico = info[9].innerText;
                const mandato = info[10].innerText;                
                return { gestao, publico, mandato};
            });
            console.log(result);

            fii.gestao = result.gestao;
            fii.publico = result.publico;
            fii.mandato = result.mandato;
            console.log(fii);
        });
       // browser.close();
        return fiis;  // retorna para função exportada 
    }
};


