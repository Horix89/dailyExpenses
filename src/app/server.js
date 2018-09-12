const express = require('express');
var app = express();

require('../routes/expenses')(app);

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.listen(3000,() => console.log('start my new application in node Js'));