import express from 'express';

const cats = [
  { id: 1, name: 'Fluffy' },
  { id: 2, name: 'Whiskers' },
  { id: 3, name: 'Tiger' },
];

const dogs = [
  { id: 1, name: 'Rex' },
  { id: 2, name: 'Spot' },
  { id: 3, name: 'Buddy' },
];

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// @nanoapi method:GET path:/
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// @nanoapi method:GET path:/api/v0/cats group:cats
app.get('/api/v0/cats', async (req, res) => {
  res.send(cats);
});

// @nanoapi method:GET path:/api/v0/cats/:id group:cats
app.get('/api/v0/cats/:id', async (req, res) => {
  const cat = cats.find((cat) => cat.id === parseInt(req.params.id));
  res.send(cat);
});

// @nanoapi method:POST path:/api/v0/cats group:cats
app.post('/api/v0/cats', async (req, res) => {
  const cat = req.body;
  cats.push(cat);
  res.send(cat);
});

// @nanoapi method:GET path:/api/v1/dogs group:dogs
app.get('/api/v1/dogs', async (req, res) => {
  res.send(dogs);
});

// @nanoapi method:GET path:/api/v1/dogs/:id group:dogs
app.get('/api/v1/dogs/:id', async (req, res) => {
  const dog = dogs.find((dog) => dog.id === parseInt(req.params.id));
  res.send(dog);
});

// @nanoapi method:POST path:/api/v1/dogs group:dogs
app.post('/api/v1/dogs', async (req, res) => {
  const dog = req.body;
  dogs.push(dog);
  res.send(dog);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
