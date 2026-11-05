const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let msg = 'Works on my machine'
    res.send('Works on my machine.');
});

module.exports = app;
