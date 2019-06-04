const express = require('express')
const app = express()
const Transactions = require('../models/transaction')


const {
    verificaToken
} = require('../middleware/auth');


app.get('/transactions', verificaToken,(req, res) => {
    Transactions.findAll().then(result => res.json(result))
})

app.post('/transactions',  verificaToken,(req, res) => {
    let body = req.body

    let transaction = {
        wallet_idwallet: body.wallet_idwallet,
        value: body.value,
        timestamps: body.timestamps,

    }
    Transactions.create(transaction).then(result => res.json(result))
});

app.put('/transactions/:id', verificaToken, (req, res) => {
    let body = req.body
    let transaction = {
        wallet_idwallet: body.wallet_idwallet,
        value: body.value,
        timestamps: body.timestamps,

    }
    Transactions.update(transaction, {
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
app.delete('/transactions/:id', verificaToken, (req, res) => {
    Transactions.destroy({
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