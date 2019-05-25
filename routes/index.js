const express = require('express')
const app = express()

app.use(require('./user'));
app.use(require('./rol'));
app.use(require('./rol_has_user'));
app.use(require('./transaction'))
app.use(require('./wallet'))
app.use(require('./company'))
app.use(require('./privilegies'))
app.use(require('./service'))
app.use(require('./rol_has_service'))
app.use(require('./qr'))


module.exports = app