const _ = require('lodash')
const Product = require('../models/products.js')


const product = app => {
    let _product = []

    //create
    app.post('/api/products', (req, res) => {
        const newProduct = new Product(req.body)
        newProduct.save().then(() => {
            res.json({'info': 'Product Created'})
        })
        .catch(err => {
            console.error(err)
        })

    })

    //read
    app.get('/api/products', (req, res) => {
        Product.find().then(products => {
            res.send(products)
        })
    })

    //update
    app.put('/api/products/:id', (req, res) => {
        Product.update({_id: req.params.id}, req.body)
        .then(() => {
            res.json({"info":"Product Updated"})
        })
        .catch(err => {
            console.error(err)
        })
    })

    //delete
    app.delete('/api/products/:id', (req, res) => {
        Product.remove({_id: req.params.id})
        .then(() => {
            res.json({"info": "Product Deleted!"})
        })
        .catch(err => {
            console.error(err)
        })
    })
}

module.exports = product