const app = require('./app');

const port = 3000;
const host = '0.0.0.0';

app.listen(port, host, () => {
    console.log(`YEEEEEEEE Server listening on http://${host}:${port}`);
});
