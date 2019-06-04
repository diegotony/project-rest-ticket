// jshint esversion:6
const express = require('express')
const Usuario = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

app.post('/login', (req, res) => {
    let body = req.body;
    Usuario.findOne({
        where: {
            name: body.name,
        }
    }).then((user) => {
        if (!user) {
            res.status(404).json({
                ok: false,
                msg: "User not found"
            });
        } else {
            if (!bcrypt.compareSync(body.pass, user.pass)) {
                res.status(500).json({
                    ok: false,
                    msg: "Incorrect Password "
                });

            } else {
                let token = jwt.sign({
                    usuario: user
                }, process.env.SEED, {
                    expiresIn: process.env.CADUCIDAD_TOKEN
                });

                res.status(200).json({
                    ok: true,
                    user: user.id,
                    token

                });

            }
        }
    });
});


module.exports = app;