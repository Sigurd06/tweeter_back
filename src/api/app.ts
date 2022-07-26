import express from 'express';

import http from 'http';
import morgan from 'morgan';

import routes from './routes';

const app = express();
const server = http.createServer(app);

app.use(morgan('tiny'));
app.use('/', routes());

export default server;
