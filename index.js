// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
const http = require('http');

// Create a File System 
const fs = require('fs');

const server = http.createServer((request,response) => {

    const dataFile = fs.readFileSync('index.html').toString();

    response.end(dataFile);
})

server.listen(8080,() =>{
    console.log('Servert is listening on 8080');
})

module.exports = server;
