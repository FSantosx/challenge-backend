const {DataTypes} = require('sequelize');
const sequelize = require('../config');

const BlockedIp = sequelize.define('blocked_ips', {
  id: {
    type: DataTypes.CHAR,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  ip: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  until: {
    type: DataTypes.STRING,
    defaultValue: '',
    unique: true,
  },
}, {
  timestamps: false,
  underscored: true,
  tableName: 'blocked_ips',
});

module.exports = BlockedIp;
