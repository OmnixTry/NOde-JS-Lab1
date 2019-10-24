const http = require("http");
const fs = require("fs");

const handleRequest = (request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  fs.readFile("./Lab7.html", null, (error, data) => {
    if (error) {
      response.writeHead(404);
      respone.write("Whoops! File not found!");
    } else {
      response.write(data);
    }
    response.end();
  });
};

http.createServer(handleRequest).listen(3000);

/*

const http = require("http");
const fs = require("fs");
const port = 3000;
const server = http.createServer((seq, res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  const readStream = fs.createReadStream("Lab7.html").pipe(res);
});

server.listen(3000);
*/

/* const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
let fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  fs.readFile('./index.html', null, function (error, data) {
    if (error) {
        response.writeHead(404);
        respone.write('Whoops! File not found!');
    } else {
        response.write(data);
    }
    response.end();
    //consoleres.statusCode = 200
    //res.setHeader('Content-Type', 'text/html')
    //res.sendFile("Lab7.html")
    //res.end(path.resolve("Lab7.html"))
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
*/

/*
const path = require("path")
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    //res.sendFile("Lab7.html")
    //res.end(path.resolve(Lab7.html))
    //res.end('./Lab7.html')
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
*/
