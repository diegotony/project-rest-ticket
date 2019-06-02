const Sequelize = require('sequelize')
const sequelize = new Sequelize('d4en0947khmmdd', 'hdzapgnajugejs', '3fc38c514b0274af8d0602bf36ee5b2d7385e7b0d57e09204a93bceb702e763e', {
    host: 'ec2-75-101-147-226.compute-1.amazonaws.com',
    dialect: 'postgres'
});

module.exports = sequelize