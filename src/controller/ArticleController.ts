import { Request, Response } from 'express'
import { Client } from 'pg';
import getClient from '../client/elasticsearch';

class ArticleController {

  async create(req: Request, res: Response) {
    const client = new Client({
      host: 'localhost',
      port: 5454,
      database: 'portal_news_development',
      user: 'postgres',
      password: '123456'
    });

    await client.connect();

    const { rows } = await client.query('SELECT * FROM articles');

    for await(let row of rows) {
      await getClient().index({
        index: 'articles',
        body: row
      });
    }

    return res.status(200).json({ message: "Index Successfully"});
  }
  
}

export default new ArticleController;