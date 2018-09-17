const mongoose = require('mongoose'), Schema = mongoose.Schema;;
const DATABASE_CONNECTION = 'mongodb://127.0.0.1:27017/dailyExpenses';

var ExpenseSchema = new Schema({
    description   : { type: String, required: true }
  , price     : { type: Number,  required: true }
});

const Expense = mongoose.model('Expenses', ExpenseSchema);

exports.initializeMongo = function(){
    mongoose.connect(DATABASE_CONNECTION);

    var db = mongoose.connection;

    db.on('error', function(){
        console.log('an error has happening when connect with mongoDB');
    })
}

module.exports = Expense;