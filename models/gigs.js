'use strict';
module.exports = (sequelize, DataTypes) => {
  const gigs = sequelize.define('gigs', {
    title: DataTypes.STRING,
    technologies: DataTypes.STRING,
    budget: DataTypes.STRING,
    description: DataTypes.TEXT,
    contact: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  gigs.associate = function(models) {
    // associations can be defined here
  };
  return gigs;
};