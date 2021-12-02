"use strict";

exports.suma = function(a,b) {
    return a+b;
}

exports.resta = function(a,b) {
    return a-b;
}

exports.mult = function (a,b) {
    return a*b;
}

exports.division = function (a,b) {
    if (b!=0) {
        return a/b;
    }
    return 0;
}

const Persona = {
    nombre: "Pedro",
    apellido: "Perez"
}

exports.getNombre = function getNombre() {
    return Persona.nombre;
}

exports.getApellido = function getApellido() {
    return Persona.apellido;
}