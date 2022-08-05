import { Request, Response } from 'express'
import { Client } from 'pg';

class DBController {

  async create(req: Request, res: Response) {
    const client = new Client({
      host: 'localhost',
      port: 5454,
      database: 'portal_news_development',
      user: 'postgres',
      password: '123456'
    });

    await client.connect();

    const data = await client.query('SELECT * FROM articles');

    return res.json(data.rows);
  }
}

export default new DBController;