module.exports = function(app){
    const expenses = [
        id = 1, name = 'Chino', price = '1.00',
        id = 2, name = 'Dia', price = '3.00',
    ]

    app.get('/api/expenses', (req, res) => {
        res.send(expenses);
    })
}