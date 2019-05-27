const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../sequelize");
const type = Sequelize.DataTypes;

class Qr extends Model {}
Qr.init({
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    path_image: {
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
    modelName: "qr"
});


sequelize
    .sync({
        force: true
    })
    .then(() => {
        console.log(`tables qrs created!`)
    })
// .then(() => {
//     Qr.create({
//         name: "data",
//         path_image: "image",
//         active: "True",
//         user_iduser: 1
//     })
// });

module.exports = Qr;