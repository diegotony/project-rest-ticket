const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;
const Rol_has_user = require("./rol_has_user");
const Qr = require("./qr")
const Wallet = require('./wallet')
const Seller_Account = require('./seller_account')
class User extends Model {}
User.init({
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
    },
    surname: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    dni: {
        unique: true,
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    pass: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    }
}, {
    sequelize,
    modelName: "user"
});

// Rol_has.hasMany(Rol, {
//     foreignKey: 'rol_idrol'
// });

User.hasMany(Rol_has_user, {
    foreignKey: "rol_iduser"
});

User.hasMany(Qr, {
    foreignKey: "user_iduser"
});

User.hasMany(Wallet, {
    foreignKey: "user_iduser"
});

User.hasMany(Seller_Account, {
    foreignKey: "user_iduser"
})

sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables users created!`)
    })
    .then(() => {
        User.create({
                name: "EL Papu",
                surname: "QPensabas",
                dni: "0000014000",
                pass: "lol"
            }),
            User.create({
                name: "EL Papu",
                surname: "QPensabas",
                dni: "0000015000",
                pass: "lol"
            }),
            User.create({
                name: "EL Papu",
                surname: "QPensabas",
                dni: "0000016000",
                pass: "lol"
            }),
            User.create({
                name: "EL Papu",
                surname: "QPensabas",
                dni: "0000017000",
                pass: "lol"
            });
    });

module.exports = User;