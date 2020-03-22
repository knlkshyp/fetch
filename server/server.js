const express = require('express');     // npm install express
const port = 3000;

const app = express();

app.get('/', (request, response) => {
    response.send('Hola! Mucho Gusto');
});

app.listen(port, () => {
    console.log(`Server up on port ${port}.`);
});