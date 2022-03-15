// var http=require("http");
//  const app=require("./app.js")

// const PORT = process.env.PORT || 5000;
// const server = http.createServer(app);
// server.listen(PORT,()=>{
//     console.log(`server is here ${PORT}`);
// })
 
var http = require("http");

const app = require("./app.js");

const PORT=5000;
const server = http.createServer(app);
server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});