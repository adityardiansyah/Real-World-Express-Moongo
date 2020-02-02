const _ = require('lodash')


const product = app => {
    let _product = []

    //create
    app.post('/api/products', (req, res) => {
        _product.push(req.body)
        res.json({'info': 'Product Created'})
    })

    //read
    app.get('/api/products', (req, res) => {
        res.send(_product)        
    })

    //update
    app.put('/api/products/:id', (req, res) => {
        const index = _.findIndex(_product, {
            id: parseInt(req.params.id)
        })
        _.merge(_product[index], req.body)
        res.json({"info":"Product Updated"})
    })

    //delete
    app.delete('/api/products/:id', (req, res) => {
        _.remove(_product, product => {
            return product.id === parseInt(req.params.id)
        })
        res.json({"info": "Product Deleted!"})
    })
}

module.exports = product