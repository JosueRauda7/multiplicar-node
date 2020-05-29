//Requires
const fs = require("fs");
const colors = require('colors');

//Funciones
let tablaM = (base, limite = 10) => {
    let tabla = `Tabla del ${base}\n`;
    for (let i = 1; i <= limite; i++) {
      tabla += `${base} * ${i} = ${base * i}\n`;
    }
    return tabla;
  };

const listarTabla = (base, limite = 10) => {
    let tabla = tablaM(base, limite);
    console.log(tabla.cyan);
}

const crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {

    if(!Number(base))
    {
        reject(`El valor introducido ${base} no es un número`);
        return;
    }
     
    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, tablaM(base, limite), (err) => {
        if (err) reject(err);
        else resolve(`tabla-${base}-al-${limite}.txt`);
      });


  });
};

module.exports = {
    crearArchivo,
    listarTabla
}