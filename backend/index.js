const express = require('express');
const Scraper = require('./scrape');

const app = express();

app.get('/funds', async (request, response) => {
    const fiis = await Scraper.getFiis();
    return response.json(fiis);
})


app.listen(3333);
