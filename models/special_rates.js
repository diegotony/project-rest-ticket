const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;

class Special_Rates extends Model {}
Special_Rates.init({
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




// Rol.hasOne(Company, {
//     foreignKey: "company_idcompany"
// })

sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables special_rate created!`)
    })
    .then(() => {});

module.exports = Special_Rates;