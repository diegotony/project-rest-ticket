const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;

class Privilegio extends Model {}
Privilegio.init({
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
    modelName: "privilegie"
});


sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables privilegies created!`)
    })
    .then(() => {});

module.exports = Privilegio;