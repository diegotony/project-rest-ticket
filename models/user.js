const Sequelize = require('sequelize')
const Model = Sequelize.Model;
const sequelize = require('../sequelize')
const type = Sequelize.DataTypes;


class User extends Model {}
User.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
}, {
    sequelize,
    modelName: 'user'
});



sequelize.sync({
        force: true
    })
    .then(() => {
        console.log(`Database & tables created!`)
    })

module.exports = User