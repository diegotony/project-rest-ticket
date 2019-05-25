const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;
const Rol_has_user = require("./rol_has_user");
const Privilegie = require('./privilegies')
const Rol_has_service = require('./rol_has_service')
class Rol extends Model {}
Rol.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    }
}, {
    sequelize,
    modelName: "rol"
});

Rol.hasMany(Rol_has_user, {
    foreignKey: "rol_idrol"
});

Rol.hasMany(Privilegie, {
    foreignKey: "rol_idrol"
});

Rol.hasMany(Rol_has_service, {
    foreignKey: "rol_idrol"
});


// Rol.hasOne(Company, {
//     foreignKey: "company_idcompany"
// })

sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables rol created!`)
    })
    .then(() => {
        // Rol.create({
        //         name: "ADMIN",
        //         company_idcompany: 1
        //     }),
        //     Rol.create({
        //         name: "VENDEDOR",
        //         company_idcompany: 1
        //     }),
        //     Rol.create({
        //         name: "USER",
        //         company_idcompany: 1
        //     });
    });

module.exports = Rol;