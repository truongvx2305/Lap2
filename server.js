const http = require('node:http');
const hostname = '127.0.0.1'; //localhost
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<h1>Lab2 - NodeJS</h1>');
    res.write(`<h1>nodejs hello world</h1>`);
    res.end();
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});