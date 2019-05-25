const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;
const Rol_has_service = require('./rol_has_service')
const Special_Rates = require('./special_rates')
const Regular_Rates = require('./regular_rates')
class Service extends Model {}
Service.init({
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
    }
}, {
    sequelize,
    modelName: "service"
});

Service.hasMany(Rol_has_service, {
    foreignKey: 'service_idservice'
})

Service.hasMany(Special_Rates, {
    foreignKey: 'service_idservice'
});
Service.hasMany(Regular_Rates, {
    foreignKey: 'service_idservice'
})

// Rol.hasOne(Company, {
//     foreignKey: "company_idcompany"
// })

sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables rol created!`)
    })
    .then(() => {

    });

module.exports = Service;