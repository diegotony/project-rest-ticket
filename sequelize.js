const Sequelize = require('sequelize')
const sequelize = new Sequelize('sql9293155', 'sql9293155', 'WnWH4wMNmu', {
    host: 'sql9.freesqldatabase.com',
    dialect: 'mysql'
});

module.exports = sequelize