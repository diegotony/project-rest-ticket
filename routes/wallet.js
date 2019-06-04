const express = require('express')
const app = express()
const Wallet = require('../models/wallet')


const {
    verificaToken
} = require('../middleware/auth');


app.get('/wallets', verificaToken, (req, res) => {
    Wallet.findAll().then(result => res.json(result))
})




app.get('/wallets/user/:idu/:idc', verificaToken, (req, res) => {
    let body = req.body

    Wallet.findOne({
        where: {
            user_iduser: req.params.idu,
            company_idcompany: req.params.idc
        }
    }).then(
        result => {
            res.json({
                result
            })
        })
});


app.get('/wallets/user/:id', verificaToken, (req, res) => {
    Wallet.findAll({
        where: {
            user_iduser: req.params.id
        }
    }).then(result => res.json(result))

});

app.post('/wallets/user/:id', verificaToken, (req, res) => {
    Wallet.findAll({
        where: {
            user_iduser: req.params.id
        }
    }).then(result => res.json(result))

});

app.post('/wallets', verificaToken, (req, res) => {
    let body = req.body

    let wallet = {
        wallet_number: body.wallet_number,
        balance: body.balance,
        user_iduser: body.user_iduser,
        company_idcompany: body.company_idcompany
    }
    Wallet.create(wallet).then(result => res.json(result))
});

app.put('/wallets/:id', verificaToken, (req, res) => {
    let body = req.body
    let wallet = {
        wallet_number: body.wallet_number,
        balance: body.balance,
        user_iduser: body.user_iduser,
        company_idcompany: body.company_idcompany
    }
    Wallet.update(wallet, {
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



app.put('/wallets/user/:idu/:idc', verificaToken, (req, res) => {
    let body = req.body
    let wallet = {
        balance: body.balance,
    }
    Wallet.update(wallet, {
        where: {
            user_iduser: req.params.idu,
            company_idcompany: req.params.idc
        }
    }).then(
        result => {
            res.json({
                result
            })
        });
});




app.delete('/wallets/:id', (req, res) => {
    Wallet.destroy({
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