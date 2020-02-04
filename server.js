const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aditya:admin@belajarnodejsmongoo-i3ysu.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.Promise = global.Promise
app.use(bodyParser.json())
const product = require('./controllers/product.js')(app)

app.get('/', (req, res) => {
    res.send('OK')
})

app.listen(3000)