const Sequelize = require('sequelize')
const sequelize = new Sequelize('eticket', 'root', '12345Root', {
    host: 'ticketidentifier.cv4optoxd7l3.us-east-1.rds.amazonaws.com',
    dialect: 'postgres'
});

// const sequelize = new Sequelize('d36109184500i1', 'trdxsvxjobfquw', 'fb310b803966de78c9df88b9db765aa343c37c21d9927940d06df91a76b473c6', {
//     host: 'ec2-54-225-113-7.compute-1.amazonaws.com',
//     dialect: 'postgres',
//     dialectOptions: {
//         native:true,
//         ssl: true
//       }
// });

// sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
// }).catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
module.exports = sequelize