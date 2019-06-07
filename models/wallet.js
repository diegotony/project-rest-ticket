const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;
const Transaction = require('./transaction')
class Wallet extends Model {}
Wallet.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    wallet_number: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    balance: {
        type: Sequelize.FLOAT,
        validate: {
            notEmpty: true
        }
    },

}, {
    sequelize,
    modelName: "wallet"
});

Wallet.hasMany(Transaction, {
    foreignKey: 'wallet_idwallet'
})


sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables wallet created!`)
    })
    .then(() => {

    });

module.exports = Wallet;