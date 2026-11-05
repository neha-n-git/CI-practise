const express = require('express');
const app = express();

app.get('/', (req, res) => {
     res.send('Deliberate Error');
});

module.exports = app;
