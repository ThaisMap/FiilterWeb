const Scraper = require('./scrape');

var FIIs = [];

async function teste()
{        
    FIIs = await Scraper.getFiis();
    
    FIIs = await Scraper.getStaticInfo(FIIs.slice(0, 2));
    imprimir();
}

function imprimir(){    
   // console.log(FIIs.slice(0, 2));
   console.log("terminou")
}

teste();