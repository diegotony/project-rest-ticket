const Sequelize = require('sequelize')
const sequelize = new Sequelize('d66bjjfn3pt8d7', 'fgzbtzoqvsffnf', 'fc7cc642a0bcb92a1265fdba1562d72c6961b657a2ef4e3f63705c480906246d', {
    host: 'ec2-54-225-113-7.compute-1.amazonaws.com',
    dialect: 'postgres'
});

module.exports = sequelize