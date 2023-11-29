const http = require("http");

const server = http.createServer((req, res) => {
  res.write('I am a Ninja');
  res.end();
});

const port = 3001; // Change the port number
server.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});

module.exports = server;
