const express = require('express'); /* importando o express */

const app = express(); /* Aplicação criada */

/* Definindo a rota */
app.get('/', (request, response) => {
    return response.json({message: 'Hello Go-Stack'}); /* Reposta para o cliente */
});

/* Definindo a porta onde o node/backend será executada, e retornando uma resposta toda vez que for executado */
app.listen(3333, () => {
    console.log('🥺 Back-end started!')
}); 

