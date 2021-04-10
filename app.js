//importing express
const exp=require('express');
const app=exp();
//import mongoose for connecting to mongo db
const mongo=require('mongoose');
mongo.connect('mongodb+srv://Talha:lYDxLcpsmAs2gC0Y@cluster0.gmnqm.mongodb.net/MyDemoWeb?retryWrites=true&w=majority'
    ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    }    
    ).then(console.warn('connected'))


app.get("/",(req,res)=>{
    res.end("hello");
});
app.listen(420);
