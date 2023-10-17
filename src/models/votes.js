const {DataTypes} = require('sequelize');
const sequelize = require('../config');
const News = require('./news');

const Votes = sequelize.define('Votes', {
  id: {
    type: DataTypes.CHAR,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  news_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direction_vote: {
    type: DataTypes.STRING,
    defaultValue: '',
    unique: true,
  },
  ip: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.TIME,
  },
}, {
  timestamps: false,
  underscored: true,
  tableName: 'votes',
});

Votes.belongsTo(News, {foreignKey: 'news_id'});

module.exports = Votes;
