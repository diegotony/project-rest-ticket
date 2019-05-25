const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;

class Payment extends Model {}
Payment.init({
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
    time_stamps: {
        type: Sequelize.TIME,
        validate: {
            notEmpty: true
        }
    }
}, {
    sequelize,
    modelName: "rol"
});


sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables payments created!`)
    })
    .then(() => {});

module.exports = Payment;