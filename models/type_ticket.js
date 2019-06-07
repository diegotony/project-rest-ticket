const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;

class Type_Ticket extends Model {}
Type_Ticket.init({
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
    modelName: "type_ticket"
});

Type_Ticket.hasMany(Rates, {
    foreignKey: 'type_ticket_idtype_ticket'
})

sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables type_ticket created!`)
    })
    .then(() => {

    });

module.exports = Type_Ticket;