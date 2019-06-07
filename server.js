require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
var RateLimit = require('express-rate-limit');
var jwt = require('express-jwt');
var blacklist = require('express-jwt-blacklist');



// middleware
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(require('./routes/index'));
app.use(helmet());

// port
app.listen(process.env.PORT, () => {
    // console.log("NODEJS LISTENING ", process.env.PORT);
    console.log("NODEJS WORKING ");
});
