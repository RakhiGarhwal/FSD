//const fs=require('fs')
// fs.writeFile("myfile.txt", "Welcome to class -AI-C", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })
// fs.rename("myfile.txt", "newfile.txt", function(err){
//     if(err) console.error(err);
//     else console.log("file.renamed");
// })
// fs.copyFile("newfile.txt", "./new/anotherfile.xt", function(err){
//     if(err) console.error(err);
//     else console.log("no error");
// })

// fs.rmdir("./new2",{recursive: true}, function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

// const http = require("http");
// const server=http.createServer((req, res)=>{
//    if(req.url=='/'){
//     res.end("This is the Home page");

//    }
//     if(req.url=="/about"){
//     res.end("This is the about page");   }
//     if(req.url=="/home"){
//         res.end("This is the home page ");
//     }
//     if(req.url=="/profile"){
//         res.end("This is profile page")
//     }
//     else{
//         res.end("Default page");
//     }
// })


const express = require('express');
const app=express();
app.use(function(req, res, next){
    console.log("middleware i running");
    next();
})
app.get("/", function(req,res){
    res.send("This is my Home page");
})
app.get("/profile", function(req,res){
    res.send("This is the profile");
})
// app.use(function(err,req,res,next){
    
// })
app.listen(3001);