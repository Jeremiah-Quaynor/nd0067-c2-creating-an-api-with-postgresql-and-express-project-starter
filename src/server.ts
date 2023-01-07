import express, { Request } from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req: Request, res: { send: (arg0: string) => void }) => {
  res.send('Home route');
});

app.use('/store', router);

app.listen(port, function () {
  console.log(`starting app on http://localhost:${port}`);
});
