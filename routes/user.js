const express = require('express')
const app = express()
const User = require('../models/user')
const bcrypt = require('bcrypt');

const {
    verificaToken
} = require('../middleware/auth');


app.get('/users',  verificaToken,(req, res) => {
    User.findAll().then(users => res.json(users))
})



app.post('/users',  (req, res) => {
    let body = req.body

    let user = {
        name: body.name,
        surname: body.surname,
        dni: body.dni,
        pass: bcrypt.hashSync(body.pass, 10)

    }
    User.create(user).then(user => res.json(user))
});

app.put('/users/:id',  verificaToken,(req, res) => {
    let body = req.body
    let user = {
        name: body.name,
        surname: body.surname,
        dni: body.dni,
        pass: body.pass
    }
    User.update(user, {
        where: {
            id: req.params.id,
        }
    }).then(
        user => {
            res.json({
                user
            })
        })
});
app.delete('/users/:id', verificaToken, (req, res) => {
    let body = req.body

    User.destroy({
        where: {
            id: req.params.id,
        }
    }).then(user =>
        res.json({
            user
        })
    );
});
module.exports = app;