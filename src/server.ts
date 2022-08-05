import express from 'express';
import getClient from './client/elasticsearch';
import DBController from './db/DBController';

const app = express();

app.get('/', async (req, res) => {
  const client = getClient();

  // Criar um registro no elasticsearch
  const result = await client.index({
    index: 'articles',
    document: {
      title: "",
      body: ""
    }
  });

  return res.json( result );

});

app.get('/db/create', DBController.create);

app.listen(3000, () => {
  console.log('listening on port 3000');
});