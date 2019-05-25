const Sequelize = require('sequelize')
const Model = Sequelize.Model;
const sequelize = require('../sequelize')
const type = Sequelize.DataTypes;

class Rol_has_user extends Model {}
Rol_has_user.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    sequelize,
    modelName: 'rol_has_user'
});




sequelize.sync({
        force: true
    })
    .then(() => {
        console.log(`tables rol_has_user created!`)
    }).then(() => {
        // Rol_has.create({
        //         rol_idrol: 1,
        //         rol_iduser: 1
        //     }),
        //     Rol_has.create({
        //         rol_idrol: 2,
        //         rol_iduser: 2
        //     })
    })

module.exports = Rol_has_user