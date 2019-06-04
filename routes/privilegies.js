const express = require('express');
const app = express();
const Privilegies = require('../models/privilegies');

const {
    verificaToken
} = require('../middleware/auth');


app.get('/privilegies',verificaToken, (req, res) => {
    Privilegies.findAll().then(result => res.json(result))
})

app.post('/privilegies', verificaToken,(req, res) => {
    let body = req.body

    let privilegio = {
        name: body.name,
        rol_idrol: body.rol_idrol
    }
    Privilegies.create(privilegio).then(result => res.json(result))
});

app.put('/privilegies/:id',verificaToken, (req, res) => {
    let body = req.body
    let privilegio = {
        name: body.name,
        rol_idrol: body.rol_idrol
    }
    Privilegies.update(privilegio, {
        where: {
            id: req.params.id,
        }
    }).then(
        result => {
            res.json({
                result
            })
        })
});
app.delete('/privilegies/:id',verificaToken, (req, res) => {
    Privilegies.destroy({
        where: {
            id: req.params.id,
        }
    }).then(result =>
        res.json({
            result
        })
    );
});
module.exports = app;