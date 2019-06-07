const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;

class Event_has_employee extends Model {}
Event_has_employee.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
}, {
    sequelize,
    modelName: "even_has_employee"
});




sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables event_has_employee created!`)
    })
    .then(() => {
    });

module.exports = Event_has_employee;