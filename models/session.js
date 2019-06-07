const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;
class Session extends Model {}
Session.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    token: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    status: {
        type: Sequelize.FLOAT,
        validate: {
            notEmpty: true
        }
    },

}, {
    sequelize,
    modelName: "session"
});


sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables sessions created!`)
    })
    .then(() => {

    });

module.exports = Session;