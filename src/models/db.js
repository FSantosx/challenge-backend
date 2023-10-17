const USER_DB = process.env.USER_DB;
const PASS_DB = process.env.PASS_DB;
const DB_NAME = process.env.DB_NAME;

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(DB_NAME, USER_DB, PASS_DB, {
    host:"localhost",
    dialect:"mysql"
})

module.exports = sequelize