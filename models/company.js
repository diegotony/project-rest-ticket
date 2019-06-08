const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;
const Rol = require("./rol")
const Wallet = require('./wallet')
const Event = require('./event')
class Company extends Model {}
Company.init({
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
    modelName: "company"
});

Company.hasMany(Rol, {
    foreignKey: "company_idcompany"
});


// Company.hasOne(Wallet, {
//     foreignKey: "company_idcompany"
// });


Company.hasMany(Event, {
    foreignKey: "company_idcompany"
})

sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables company created!`)
    })
    .then(() => {
        Company.create({
            name: "BANCO",
            account_number: "111111111"
        })
    });

module.exports = Company;