const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;

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



sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables event created!`)
    })
    .then(() => {});

module.exports = Event