const express = require('express')
const app = express()
const User = require('../models/user')

app.get('/users', (req, res) => {
    User.findAll().then(users => res.json(users))
})

app.post('/users', (req, res) => {
    body = req.body
    user = {
        name: body.name
    }

    User.create(user).then(user => res.json(user))
});

module.exports = app