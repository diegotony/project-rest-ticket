const Sequelize = require('sequelize')
const Model = Sequelize.Model;
const sequelize = require('../sequelize')
const type = Sequelize.DataTypes;
class Rol extends Model {}
Rol.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
}, {
    sequelize,
    modelName: 'rol'
});



sequelize.sync({
        force: true
    })
    .then(() => {
        console.log(`Database & tables created!`)
    })

module.exports = Rol