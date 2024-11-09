import express from 'express';

import elvesRouter from './routers/elves.router';
import hobbitsRouter from './routers/hobbits.router';
import wizardsRouter from './routers/wizards.router';
import config from './config';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// @nanoapi path:/api/v0/elves
app.use('/api/v0/elves', elvesRouter);

// @nanoapi path:/api/v0/wizards
app.use('/api/v0/wizards', wizardsRouter);

// @nanoapi path:/api/v0/hobbits
app.use('/api/v0/hobbits', hobbitsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${config.port}`);
});