// index.js
import express from 'express'

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

//const express = require('express');
const app = express();




// Configura o Express para ler dados do formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Rota POST para receber dados do formulário
app.post('/cadastrar', (req, res) => {
  const { nome, idade, endereco, ministerios, quantidade_filhos, nome_filhos, sugestoes } = req.body;

  // Exibe os dados no console
  console.log("Dados recebidos do formulário:");
  console.log("Nome:", nome);
  console.log("Idade:", idade);
  console.log("Endereço:", endereco);
  console.log("Ministérios:", ministerios);
  console.log("Quantidade de Filhos:", quantidade_filhos);
  console.log("Nome dos Filhos:", nome_filhos);
  console.log("Sugestões:", sugestoes);

  // Enviar uma resposta para o navegador
  res.send('Cadastro recebido com sucesso!');


});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
