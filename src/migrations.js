/* eslint-disable no-unused-vars */
const sequelize = require('./config');
const News = require('./models/news');
const Votes = require('./models/votes');
const BlockedIps = require('./models/blocked_ips');

(async () => {
  try {
    await sequelize.sync();
    console.log('Migration done');
  } catch (error) {
    console.error('Erro na sincronização do banco de dados:', error);
  }
})();
