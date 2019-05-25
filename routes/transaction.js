const express = require('express')
const app = express()
const Transactions = require('../models/transaction')

app.get('/transactions', (req, res) => {
    Transactions.findAll().then(result => res.json(result))
})

app.post('/transactions', (req, res) => {
    let body = req.body

    let transaction = {
        wallet_idwallet: body.wallet_idwallet,
        value: body.value,
        timestamps: body.timestamps,

    }
    Transactions.create(transaction).then(result => res.json(result))
});

app.put('/transactions/:id', (req, res) => {
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
app.delete('/transactions/:id', (req, res) => {
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
module.exports = app