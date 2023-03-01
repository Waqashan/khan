const express= require('express');
var cors = require('cors');
var jwt=require('jsonwebtoken')
const key='hh4hhvjutyjkjiugb';
let token=jwt.sign({name:"waqas"},key,{expiresIn:"1hour"});
vrfy=jwt.verify(token,key)
// console.log(vrfy);
// console.log("tken = "+token);
let app=express();
let port=4000;
app.use(express.json());
// app.get('/',function(req,res){
//     res.send("data successfully retrived")
// });
// app.listen(2000)
app.use(cors({
    origin:'http://localhost:3000'
}));
app.post('/login',function(req,res){
    var email=req.body.email;
    var password=req.body.password;
    if(email==="waqas@gmail.com" && password === "1234"){
        res.status(200).json({" messsage":"login  is successful ",
    token,vrfy})
    }
    else{
        send.err(401)
    }


});
app.listen(port,()=>{console.log("port working");})

