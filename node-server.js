const http = require('http');

const hostname = 'localhost';
const port = 3038;

const server = http.createServer((req, res) => {
  if(req.url == "/index"){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  }else{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('others');
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});