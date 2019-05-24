const express = require('express')
const app = express()

app.use(require('./user'));
app.use(require('./rol'));
app.use(require('./has_rol'));


module.exports = app