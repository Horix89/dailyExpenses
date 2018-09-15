const express = require('express');
const database = require('../dataaccess/mongoDb/mongoDb')
var app = express();
database.initializeMongo();

require('../routes/expenses')(app);

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.listen(process.env.PORT || 3000,() => console.log('start my new application in node Js'));