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


User.hasMany(user_has_rol, {
    foreignKey: "rol_iduser"
});

User.hasMany(Qr, {
    foreignKey: "user_iduser"
});

User.hasMany(Wallet, {
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
                name: "papu",
                surname: "QPensabas",
                dni: "0000014000",
                pass: bcrypt.hashSync("lol", 10)
            }),
            User.create({
                name: "EL Papu",
                surname: "QPensabas",
                dni: "0000015000",
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