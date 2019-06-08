const express = require('express');
const app = express();
const User = require('../models/user')
const Wallet = require('../models/wallet')
const Transaction = require('../models/transaction')
var now = new Date()
const {
    verificaToken
} = require('../middleware/auth');


app.post('/deposito', (req, res) => {
    let body = req.body

    User.findOrCreate({
        where: {
            dni: body.dni
        }
    }).then(([user, created]) => {
        console.log(user.get({
          plain: true
        }));
        console.log(created);
    });
    User.findOne({
        where: {
            dni: body.dni
        }
    }).then((user) => {
        Wallet.findOrCreate({
            where: {
                user_iduser: user.id
            }
        }).then((wallet) => {
            let transaction = {
                value_actual: body.deposito,
                timestamps: now,
                type_transaction_idtype_transaction: 1,
                user_iduser: wallet[0].user_iduser,
                wallet_idwallet: wallet[0].id
            }
            Transaction.create(transaction).then((transaction) => {
                b = parseInt(body.deposito)
                Wallet.increment('balance', {
                    by: b,
                    where: {
                        id: transaction.wallet_idwallet
                    }
                }).then((wallet)=>{
                    res.json(wallet)
                })
            })
            // res.json(transaction)
        });


    });
});


module.exports = app