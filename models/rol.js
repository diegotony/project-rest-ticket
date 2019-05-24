const Sequelize = require('sequelize')
const Model = Sequelize.Model;
const sequelize = require('../sequelize')
const type = Sequelize.DataTypes;
const Rol_has = require('../models/rol_has')
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


Rol.hasMany(Rol_has, {
    foreignKey: 'rol_idrol'
});

sequelize.sync({
        force: true
    })
    .then(() => {
        console.log(`Database & tables created!`)
    }).then(() => {
        Rol.create({
            name: "ADMIN"
        }), Rol.create({
            name: "VENDEDOR"
        }), Rol.create({
            name: "USER"
        })
    })

module.exports = Rol