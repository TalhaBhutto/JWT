//importing express
const exp = require('express');
const app = exp();
//importing modal Login
const Login = require('./Model/Login');
//import body parser to post data
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
//import crypto to encrypt the password
var crypto = require('crypto');
var key = "password";
var algo = "aes256";
//import mongoose for connecting to mongo db
const mongo = require('mongoose');
mongo.connect('mongodb+srv://Talha:lYDxLcpsmAs2gC0Y@cluster0.gmnqm.mongodb.net/LearningMongo?retryWrites=true&w=majority'
    , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(console.warn('connected'));


app.get("/", (req, res) => {
    res.end("hello");
});

app.post('/register', jsonParser, (req, res) => {
    var cypher = crypto.createCipher(algo, key);
    var encrypted = cypher.update(req.body.password, 'utf8', 'hex')
        + cypher.final('hex');
    console.warn(encrypted)
    const data = new Login({
        _id: mongo.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        city: req.body.city,
        password: encrypted
    });
    data.save()
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            console.warn(err)
        })
})

app.listen(420);
