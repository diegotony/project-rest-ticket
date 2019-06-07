const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;
const Event_has_employee = require('./event_has_employee')
class Event extends Model {}
Event.init({
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
    start_date: {
        type: Sequelize.DATE,
        validate: {
            notEmpty: true
        }
    },
    end_date: {
        type: Sequelize.DATE,
        validate: {
            notEmpty: true
        }
    },
    account_number: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    }
}, {
    sequelize,
    modelName: "company"
});

Event.hasMany(Event_has_employee,{foreignKey:'event_idevent'})

sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables event created!`)
    })
    .then(() => {});

module.exports = Event