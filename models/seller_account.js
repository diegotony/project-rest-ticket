const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;
const Payment = require('./payment')
class Seller_Account extends Model {}
Seller_Account.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    account_nummber: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    }
}, {
    sequelize,
    modelName: "seller_account"
});

Seller_Account.hasMany(Payment, {
    foreignKey: "seller_account_idseller_account"
});

sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables seller_Account created!`)
    })
    .then(() => {

    });

module.exports = Seller_Account;