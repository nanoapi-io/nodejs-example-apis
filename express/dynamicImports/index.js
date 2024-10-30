const express = import('express');

const elvesRouter = import('./routers/elves.router');
const hobbitsRouter = import('./routers/hobbits.router');
const wizardsRouter = import('./routers/wizards.router');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v0/elves', elvesRouter);

app.use('/api/v1/wizards', wizardsRouter);

app.use('/api/v2/hobbits', hobbitsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});