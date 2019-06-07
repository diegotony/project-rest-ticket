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
    value_actual: {
        type: Sequelize.FLOAT,
        validate: {
            notEmpty: true
        }
    },
    value_previous: {
        type: Sequelize.FLOAT,
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
        console.log(`tables transactions created!`)
    })
    .then(() => {});

module.exports = Transaction;