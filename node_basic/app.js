var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("This is coming from the server we created")
  
      res.end()
}
).listen(4000);