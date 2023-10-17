require('dotenv').config();
const USER_DB = process.env.USER_DB;
const PASS_DB = process.env.PASS_DB;
const DB_NAME = process.env.DB_NAME;
const DIALECT = process.env.DIALECT;
const HOST = process.env.HOST;

const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  host: HOST,
  dialect: DIALECT,
  username: USER_DB,
  password: PASS_DB,
  database: DB_NAME,
});

module.exports = sequelize;
