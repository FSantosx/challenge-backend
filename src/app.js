require('dotenv').config();

const db = require('./config');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routes/routes');

app.use(router);

try {
  db.authenticate();
  console.log('Connection has been established successfully');
  app.listen(PORT, () => console.log(`Server runner under http://localhost:${PORT}`));
} catch {
  console.error('Unable to connect to the database:', error);
  db.close();
}
