const express = require('express'); /* importando o express */

const app = express(); /* Aplicação criada */

/* Definindo a rota */
app.get('/', (request, response) => {
    return response.send('Hello World'); /* o send retorna um texto */
});

app.listen(3333); /* Definindo a porta onde o node/backend será executada */

