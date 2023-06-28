import express, { Express, Request, Response } from 'express';
import { router } from './routes/router';
import * as dotenv from 'dotenv';

dotenv.config();

export const app: Express = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Welcome - Server is running');
});

app.use('/api/v1', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});