import express, { Request, Response } from 'express';
const app = express();
const port = 3000; // You can change this to any port you prefer

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
