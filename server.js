const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const product = require('./controllers/product.js')(app)

app.get('/', (req, res) => {
    res.send('OK')
})

app.listen(3000)