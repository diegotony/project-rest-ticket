const express = require('express');
const app = express();
const Qr = require('../models/qr');

const {
    verificaToken
} = require('../middleware/auth');


app.get('/qrs',verificaToken, (req, res) => {
    Qr.findAll().then(result => res.json(result))
})


app.get('/qrs/user/:id',verificaToken, (req, res) => {
    Qr.findAll({
        where: {
            user_iduser: req.params.id,
            active: true

        }
    }).then(result => res.json(result))
})

app.post('/qrs', verificaToken,(req, res) => {
    let body = req.body

    let qr = {
        code: body.code,
        path_image: body.path_image,
        active: body.active,
        user_iduser: body.user_iduser
    }
    Qr.create(qr).then(result => res.json(result))
});

app.put('/qrs/:id',verificaToken, (req, res) => {
    let body = req.body
    let qr = {
        code: body.code,
        path_image: body.path_image,
        active: body.path_image,
        user_iduser: body.user_iduser
    }
    Qr.update(qr, {
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
app.delete('/qrs/:id', verificaToken,(req, res) => {
    Qr.destroy({
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