const http = require('http');


// Creating a server
const server = http.createServer((request, response) => {
  response.end('Response received at port 8080');
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});

module.exports = server;
