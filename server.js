const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(cors());

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());
app.use(require('./routes/index'));


app.listen(3000, () => {
    // console.log("NODEJS LISTENING ", process.env.PORT);    
    console.log("NODEJS WORKING ");

});