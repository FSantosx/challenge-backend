const {DataTypes} = require('sequelize');
const sequelize = require('../config');

const News = sequelize.define('News', {
  id: {
    type: DataTypes.CHAR,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    defaultValue: '',
    unique: true,
  },
  up_votes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  down_votes: {
    type: DataTypes.CHAR,
    defaultValue: '',
  },
  ip: {
    type: DataTypes.CHAR,
    defaultValue: '',
  },
  created_at: {
    type: DataTypes.TIME,
  },
  updated_at: {
    type: DataTypes.TIME,
  },
}, {
  timestamps: false,
  underscored: true,
  tableName: 'news',
});

module.exports = News;
