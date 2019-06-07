const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;
const Transaction = require('./transaction')
class Type_Transaction extends Model {}
Type_Transaction.init({
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
    active: {
        type: Sequelize.BOOLEAN,
        validate: {
            notEmpty: true
        }
    },

}, {
    sequelize,
    modelName: "type_transaction"
});

Type_Transaction.hasMany(Transaction, {
    foreignKey: 'type_transaction_idtype_transaction'
})

sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables transaction created!`)
    })
    .then(() => {

    });

module.exports = Type_Transaction;