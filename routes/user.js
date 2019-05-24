const express = require('express')
const app = express()
const User = require('../models/user')

app.get('/users', (req, res) => {
    User.findAll().then(users => res.json(users))
})

app.post('/users', (req, res) => {
    let body = req.body

    user = {
        name: body.name
    }
    User.create(user).then(user => res.json(user))
});

app.put('/users/:id', (req, res) => {
    let body = req.body
    user = {
        name: body.name
    }
    User.update(body, {
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
app.delete('/users/:id', (req, res) => {
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
module.exports = app