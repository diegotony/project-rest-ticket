const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;
class Transaction extends Model {}
Transaction.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: true
        }
    },
    timestamps: {
        type: Sequelize.TIME,
        validate: {
            notEmpty: true
        }
    }
}, {
    sequelize,
    modelName: "transaction"
});



sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables rol created!`)
    })
    .then(() => {
        Rol.create({
                name: "ADMIN",
                company_idcompany: 1
            }),
            Rol.create({
                name: "VENDEDOR",
                company_idcompany: 1
            }),
            Rol.create({
                name: "USER",
                company_idcompany: 1
            });
    });

module.exports = Transaction;