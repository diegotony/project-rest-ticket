const Sequelize = require('sequelize')
const sequelize = new Sequelize('eticket', 'root', '12345Root', {
    host: 'ticketidentifier.cv4optoxd7l3.us-east-1.rds.amazonaws.com',
    dialect: 'postgres'
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = sequelize