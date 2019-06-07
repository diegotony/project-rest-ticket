const Sequelize = require('sequelize')
const Model = Sequelize.Model;
const sequelize = require('../sequelize')
const type = Sequelize.DataTypes;

const Event_has_employee = require('./event_has_employee')

class User_has_rol extends Model {}
User_has_rol.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    sequelize,
    modelName: 'rol_has_user'
});

User_has_rol.hasMany(Event_has_employee,{
    foreignKey:'user_has_idrol'
})

sequelize.sync({
        force: true
    })
    .then(() => {
        console.log(`tables rol_has_user created!`)
    }).then(() => {
    });

module.exports = User_has_rol