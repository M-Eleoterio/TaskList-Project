const express = require('express');
const app = express();

app.get('/data', (req, res) => {
    const jsonData = require('./data.json');
    res.json(jsonData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});