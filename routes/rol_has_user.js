const express = require('express')
const app = express()
const Rol_has = require('../models/rol_has_user')

const {
    verificaToken
} = require('../middleware/auth');


app.get('/rolhas', (req, res) => {
    Rol_has.findAll().then(rols_has => res.json(rols_has))
})

app.post('/rolhas', (req, res) => {
    let body = req.body

    let rol_has = {
        rol_idrol: body.rol_idrol,
        rol_iduser: body.rol_iduser
    }
    Rol_has.create(rol_has).then(rol_has => res.json(rol_has))
});

app.put('/rolhas/:id', (req, res) => {
    let body = req.body
    let rol_has = {
        rol_idrol: body.rol_idrol,
        rol_iduser: body.rol_iduser
    }
    Rol_has.update(rol_has, {
        where: {
            id: req.params.id,
        }
    }).then(
        rol_has => {
            res.json({
                rol_has
            })
        })
});
app.delete('/rolhas/:id', (req, res) => {
    let body = req.body

    Rol_has.destroy({
        where: {
            id: req.params.id,
        }
    }).then(rol_has =>
        res.json({
            rol_has
        })
    );
});

module.exports = app