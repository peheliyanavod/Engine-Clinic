const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const port = 8000;

server.listen(() => {
    console.log("Server is running on port ", port);
 });