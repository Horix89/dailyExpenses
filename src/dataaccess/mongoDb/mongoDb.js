const mongoose = require('mongoose'), Schema = mongoose.Schema;;
const DATABASE_CONNECTION = 'mongodb://localhost/test';

var ExpenseSchema = new Schema({
    description   : { type: String, required: true }
  , price     : { type: Number,  required: true }
});

const Expense = mongoose.model('Expensives', ExpenseSchema);

exports.initializeMongo = function(){
    mongoose.connect(DATABASE_CONNECTION);

    var db = mongoose.connection;

    db.on('error', function(){
        console.log('an error has happening when connect with mongoDB');
    })
}