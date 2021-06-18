//app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://samsonapi:product1234@cluster0.q93c1.mongodb.net/Productapps";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.use('/products', product);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});