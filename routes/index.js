// jshint esversion:6
const express = require('express');
const app = express();

app.use(require('./user'));
app.use(require('./rol'));
app.use(require('./transaction'));
app.use(require('./wallet'));
app.use(require('./company'));
app.use(require('./qr'));
app.use(require('./login'));
app.use(require('./errors'));



module.exports = app;