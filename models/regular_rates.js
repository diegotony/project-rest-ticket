const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;

class Regular_Rates extends Model {}
Regular_Rates.init({
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
    date: {
        type: Sequelize.DATE
    }
}, {
    sequelize,
    modelName: "special_rate"
});


sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables regular_rate created!`)
    })
    .then(() => {});

module.exports = Regular_Rates;