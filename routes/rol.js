const express = require('express')
const app = express()

const Rol = require('../models/rol')

app.get('/rols', (req, res) => {
    Rol.findAll().then(users => res.json(users))
})

app.post('/rols', (req, res) => {
    let body = req.body

    rol = {
        name: body.name
    }
    Rol.create(rol).then(rol => res.json(rol))
});

app.put('/rols/:id', (req, res) => {
    let body = req.body
    rol = {
        name: body.name
    }
    Rol.update(body, {
        where: {
            id: req.params.id,
        }
    }).then(
        rol => {
            res.json({
                rol
            })
        })
});
app.delete('/rols/:id', (req, res) => {
    let body = req.body

    Rol.destroy({
        where: {
            id: req.params.id,
        }
    }).then(rol =>
        res.json({
            rol
        })
    );
});

module.exports = app