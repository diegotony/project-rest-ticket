const Sequelize = require('sequelize')
const Model = Sequelize.Model;
const sequelize = require('../sequelize')
const type = Sequelize.DataTypes;
const Rol = require('./rol')
const User = require('./user')
class Rol_has extends Model {}
Rol_has.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
}, {
    sequelize,
    modelName: 'rol_has'
});

Rol_has.hasMany(Rol, {
    foreignKey: 'rol_idrol'
});


Rol_has.hasMany(User, {
    foreignKey: 'rol_idrol'
});

sequelize.sync({
        force: true
    })
    .then(() => {
        console.log(`Database & tables created!`)
    })

module.exports = Rol_has