import express from 'express';
import routes from './router/routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('🚀 listening at http://localhost:3000');
});
