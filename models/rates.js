const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;
class Rates extends Model {}
Rates.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: Sequelize.FLOAT,
        validate: {
            notEmpty: true
        }
    },
    time_rates:{
        type: Sequelize.STRING
    }

}, {
    sequelize,
    modelName: "rates"
});


sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables rates created!`)
    })
    .then(() => {

    });

module.exports = Rates;