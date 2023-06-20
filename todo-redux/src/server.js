const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = 5000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route for user registration
server.post('/register', (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const existingUser = router.db.get('users').find({ email }).value();
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create new user
  const newUser = { email, password };
  router.db.get('users').push(newUser).write();

  return res.status(201).json({ message: 'User registered successfully' });
});

// Custom route for user login
server.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user by email and password
  const user = router.db.get('users').find({ email, password }).value();

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  return res.status(200).json({ message: 'Login successful', user });
});

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
