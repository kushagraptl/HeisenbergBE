require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Fuck Off</h1>');
});

app.get('/about', (req, res) => {
    res.send('mdkmwkmdk');
});
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
