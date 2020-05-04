const express = require('express');
const Scraper = require('./scrape');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())

app.get('/funds', async (request, response) => {
    const fiis = await Scraper.getSomeFiis();
    return response.json(fiis);
})

app.get('/fewfunds', async (request, response) => {
    const fiis = await Scraper.getSomeFiis();
    return response.json(fiis);
})

app.get('/sectors', async(request, response) => {
    const sectors = await Scraper.getSectors();
    return response.json(sectors);
})

app.listen(3333);
