"use strict";

const http = require("http");
const operaciones = require("./operaciones");


const server = http.createServer(function (request, response) {
    response.writeHead(200,"OK desde NodeJS",{"content-type": "text/html"});
    response.end("<h1>Hola " + operaciones.getNombre() + " " + operaciones.getApellido() + " NodeJS</h1>");
});

console.log(operaciones.suma(1,2));
console.log(operaciones.mult(150,34));
console.log("El servidor se está ejecutando...");
server.listen(5000);