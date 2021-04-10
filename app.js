//importing express
const exp=require('express');
const app=exp();
//importing modal Login
const Login=require('./Model/Login');
//import body parser to post data
var bodyParser=require('body-parser');
var jsonParser=bodyParser.json();
//import crypto to encrypt the password
var crypto=require('crypto');
var key="password";
var algo="aes256";
//import mongoose for connecting to mongo db
const mongo=require('mongoose');
mongo.connect('mongodb+srv://Talha:lYDxLcpsmAs2gC0Y@cluster0.gmnqm.mongodb.net/LearningMongo?retryWrites=true&w=majority'
    ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    }    
    ).then(console.warn('connected'));


app.get("/",(req,res)=>{
    res.end("hello");
});

app.post('/register',jsonParser,(req,res)=>{
    var cipher=crypto.createCipher(algo,key);
    var encrypted=cipher.update(req.body.password,'utf-8','hex');

    console.warn(req.body.encrypted);
    res.end("hello");
})

app.listen(420);
