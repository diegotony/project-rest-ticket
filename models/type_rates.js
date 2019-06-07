const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;

class Type_Rates extends Model {}
Type_Rates.init({
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
    modelName: "type_rates"
});

Type_Rates.hasMany(Rates, {
    foreignKey: 'type_rates_idtype_rates'
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

module.exports = Type_Rates;