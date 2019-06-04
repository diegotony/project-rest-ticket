// jshint esversion:6
const express = require('express');
const app = express();
const Company = require('../models/company');


const {
    verificaToken
} = require('../middleware/auth');


// GET ALL COMPANIES

app.get('/companies', verificaToken, (req, res) => {
    Company.findAll().then(result => res.json(result))
});

// POST ALL COMPANIES

app.post('/companies', verificaToken, (req, res) => {
    let body = req.body;

    let company = {
        name: body.name,
    };
    Company.create(company).then(result => res.json(result))
});

// PUT A COMPANY
app.put('/companies/:id', verificaToken, (req, res) => {
    let body = req.body;
    let company = {
        name: body.name
    };
    Company.update(company, {
        where: {
            id: req.params.id,
        }
    }).then(
        result => {
            res.json({
                result
            });
        });
});

// DELETE A COMPANY

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
module.exports = app;