const express = require('express')
const app = express()
const Service = require('../models/service')

const {
    verificaToken
} = require('../middleware/auth');



app.get('/servicies', [verificaToken], (req, res) => {
    Service.findAll().then(result => res.json(result))
})

app.post('/servicies', [verificaToken], (req, res) => {
    let body = req.body

    let service = {
        name: body.name,
        company_idcompany: body.company_idcompany
    }
    Service.create(service).then(result => res.json(result))
});

app.put('/servicies/:id', [verificaToken], (req, res) => {
    let body = req.body
    let service = {
        name: body.name,
        company_idcompany: body.company_idcompany
    }
    Service.update(service, {
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
app.delete('/servicies/:id', [verificaToken], (req, res) => {
    Service.destroy({
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