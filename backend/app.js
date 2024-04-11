const express = require('express');

const cors = require('cors');

const facts = require('./data/chucknorris.json');

const tasks = require('./data/tasks.json');

const port = 3333;

const sessions = {};

const createMiddleware = app => {
  app.use(express.json());
  app.use(cors());

  app.use((req, res, next) => {
    console.info(`Request received: ${req.method} ${req.path}`);

    next();
  });
};

const createRoutes = app => {
  app.get('/fact', (req, res) => {
    const max = facts.length - 1;

    const index = Math.floor(Math.random() * max) + 1;

    res.status(200).json({ fact: facts[index] });
  });

  app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
  });
};

const start = () => {
  const app = express();

  createMiddleware(app);
  createRoutes(app);

  app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
  });
};

start();
