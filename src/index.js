const express = require('express'); /* importando o express */

const app = express(); /* Aplicação criada */

app.use(express.json()); /* Necessário para lermos os JSON vindos no request */

/* Definindo a rota para retornar os nossos projetos(fakes) com o método GET */
app.get('/projects', (request, response) => {
  /* Pegando os parâmetros passados por query do cliente */
  const {title, owner} = request.query;

  console.log(title);
  console.log(owner);

  return response.json([
    'Projeto 1',
    'Projeto 2'
  ]); /* Reposta para o cliente */
});

/* Simulando criação de projetos com o método post */
app.post('/projects', (request, response) => {
  /* Pegando informações do body que vem do cliente em formato JSON */
  const { title, owner } = request.body;

  console.log(title);
  console.log(owner);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'
  ]);
});

/* Alterando/Atualizando informações fakes de projetos com o método PUT*/
app.put('/projects/:id', (request, response) => {
  /* Pegando os parâmetros passados pelo usuário, neste caso o id */
  const {id} = request.params;

  console.log(id);

  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3'
  ]);
});

/* Deletando informações fakes de projetos com o método DELETE*/
app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 2',
    'Projeto 3'
  ]);
});

/* Definindo a porta onde o node/backend será executada, e retornando uma resposta toda vez que for executado */
app.listen(3333, () => {
  console.log('🥺 Back-end started!')
}); 

