// const axios = require('axios');

module.exports = {
    
    create: (req,res)=>{
        const db = req.app.get('db');
        const {name, description, price, image_url} = req.body;
        db.create_product([ name, description, price, image_url ])
            .then(() => res.sendStatus(200))
            .catch(error => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(error)})  
    },

    getOne: (req,res)=>{
        const db = req.app.get('db');

        db.read_product(req.params.id)
        .then(product => res.status(200).send(product))
        .catch(error => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(error)})        
    },

    getAll: (req,res)=>{
        const db = req.app.get('db');

        db.read_products()
        .then(products =>res.status(200).send(products))
        .catch(error => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(error)})
    },

    update: (req,res)=>{
        const db = req.app.get('db');
        const { params, query } = req;
        db.update_product([params.id, query.desc])
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(error)})
    },

    delete: (req,res)=>{
        const db = req.app.get('db');
        const { params } = req;
        db.delete_product([params.id])
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(error)}) 
    }
}