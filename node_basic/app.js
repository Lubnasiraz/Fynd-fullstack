// // var http=require("http");
// // var importedfromindex=require("./index")

// // const PORT = process.env.PORT || 5000
// // http.createServer(function(req,res){
// //     res.writeHead(200,{'Content-Type':'text/plain'});
// //     res.write("This is coming from the server we created")
  
// //       res.end("this is coming from the source folder")
// // }
// // ).listen(PORT);
 const express = require("express");
const app=express();
const userrouter =require("./api/routes/user.js");

// app.use((req,res,next)=>{
//   console.log("first use all middlewae ran");
//   next()
// },(req,res,next)=>{
//   console.log("second use all middleware run");
//   next()
// }
// )


// app.post("/",(req,res,next)=>{
//   res.json({message:`execute only port`})
// })

app.get("/",(req,res,next)=>{
  res.json({message:"come here"})
  next()
 })

app.use("/users",userrouter)


 module.exports=app;
