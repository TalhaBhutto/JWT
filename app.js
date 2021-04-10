//importing express
const exp=require('express');
const app=exp();
//importing modal Login
const Login=require('./Model/Login');
//import body parser to post data
var bodyParser=require('body-parser')
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
app.listen(420);
