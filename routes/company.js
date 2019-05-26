const express = require('express')
const app = express()
const Company = require('../models/company')


const {
    verificaToken
} = require('../middleware/auth');

app.get('/companies', (req, res) => {
    Company.findAll().then(result => res.json(result))
})

app.post('/companies', (req, res) => {
    let body = req.body

    let company = {
        name: body.name,
    }
    Company.create(company).then(result => res.json(result))
});

app.put('/companies/:id', (req, res) => {
    let body = req.body
    let company = {
        name: body.name
    }
    Company.update(company, {
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
app.delete('/companies/:id', (req, res) => {
    Company.destroy({
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