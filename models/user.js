const Sequelize = require('sequelize')
const Model = Sequelize.Model;
const sequelize = require('../sequelize')
const type = Sequelize.DataTypes;
const Rol_has = require('../models/rol_has')

class User extends Model {}
User.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    dni: Sequelize.STRING,
    pass: Sequelize.STRING

}, {
    sequelize,
    modelName: 'user'
});

// Rol_has.hasMany(Rol, {
//     foreignKey: 'rol_idrol'
// });


User.hasMany(Rol_has, {
    foreignKey: 'rol_iduser'
});


sequelize.sync({
        force: true
    })
    .then(() => {
        console.log(`Database & tables created!`)
    }).then(() => {
        User.create({
            name: "EL Papu",
            surname: "QPensabas",
            dni: "0000010000",
            pass: "lol"
        }), User.create({
            name: "EL Papu",
            surname: "QPensabas",
            dni: "0000010000",
            pass: "lol"
        }), User.create({
            name: "EL Papu",
            surname: "QPensabas",
            dni: "0000010000",
            pass: "lol"
        }), User.create({
            name: "EL Papu",
            surname: "QPensabas",
            dni: "0000010000",
            pass: "lol"
        })
    })

module.exports = User