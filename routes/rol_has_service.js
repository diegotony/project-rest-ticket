const express = require('express')
const app = express()
const Rol_has_service = require('../models/rol_has_service')

app.get('/rolhasservice', (req, res) => {
    Rol_has_service.findAll().then(result => res.json(result))
})

app.post('/rolhasservice', (req, res) => {
    let body = req.body

    let rol_has_service = {
        rol_idrol: body.rol_idrol,
        service_idservice: body.service_idservice
    }
    Rol_has_service.create(rol_has_service).then(result => res.json(result))
});

app.put('/rolhasservice/:id', (req, res) => {
    let body = req.body
    let rol_has_service = {
        rol_idrol: body.rol_idrol,
        service_idservice: body.service_idservice
    }
    Rol_has_service.update(rol_has_service, {
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
app.delete('/rolhasservice/:id', (req, res) => {
    Rol_has_service.destroy({
        where: {
            id: req.params.id,
        }
    }).then(result =>
        res.json({
            result
        })
    );
});
module.exports = app