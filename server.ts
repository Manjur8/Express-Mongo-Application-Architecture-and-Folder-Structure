// import express, { Express, Request, Response } from 'express';

// const app: Express = express();

// app.get('/', (_: Request, res: Response) => {
//     res.send('Express + TypeScript Server');
// });

import app from './src/app'
import sitemap  from 'express-sitemap-html'

sitemap.swagger('TODO App - API DOCS', app)

const port = 3000;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});