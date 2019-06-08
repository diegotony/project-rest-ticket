const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;
const Qr = require("./qr");
const Wallet = require('./wallet');
const Transaction = require('./transaction');
const Session = require('./session');
const user_has_rol = require('./user_has_rol')
const bcrypt = require('bcrypt');

class User extends Model {}
User.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,

    },
    surname: {
        type: Sequelize.STRING,
    },
    dni: {
        unique: true,
        type: Sequelize.STRING,

    },
    pass: {
        type: Sequelize.STRING,

    }
}, {
    sequelize,
    modelName: "user"
});


User.hasMany(user_has_rol, {
    foreignKey: "rol_iduser"
});

User.hasMany(Qr, {
    foreignKey: "user_iduser"
});

User.hasOne(Wallet, {
    foreignKey: "user_iduser"
});

User.hasMany(Session, {
    foreignKey: "user_iduser"
});

User.hasMany(Transaction, {
    foreignKey: "user_iduser"
});


sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables users created!`)
    })
    .then(() => {
        User.create({
                name: "Banco de Loja",
                surname: "Banco de Loja",
                dni: "1111111111",
                pass: bcrypt.hashSync("12345", 10)
            }),
            User.create({
                name: "EL Papu",
                surname: "QPensabas",
                dni: "1150601100",
                pass: bcrypt.hashSync("lol", 10)
            }),
            User.create({
                name: "EL Papu",
                surname: "QPensabas",
                dni: "0000016000",
                pass: bcrypt.hashSync("lol", 10)
            }),
            User.create({
                name: "EL Papu",
                surname: "QPensabas",
                dni: "0000017000",
                pass: bcrypt.hashSync("lol", 10)
                // TODO
                // lol
            });
    });

module.exports = User;