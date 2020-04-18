const express = require('express');
const Scraper = require('./scrape');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())

app.get('/funds', async (request, response) => {
    const fiis = await Scraper.getFiis();
    return response.json(fiis);
})


app.listen(3333);
