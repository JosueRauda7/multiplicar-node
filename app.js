//REQUIRES
//  Locales
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require("./config/yargs").argv;

//  Paquetes
const colors = require('colors');

//console.log(argv.base); //5. En el caso de >npm app listar -b 5

let comando = argv._[0];

let base = argv.base;
let limite = argv.limite;

switch (comando) {
  case "listar": //.. >node app listar -b [número: base] -l [número: límite]
    listarTabla(base, limite);
    break;

  case "crear": //.. >node app crear -b [número]
    crearArchivo(base, limite)
      .then((archivo) => console.log(`Archivo creado: ${archivo.green}`))
      .catch((err) => {
        console.log(err.red);
      });
    break;

  default:
    console.log("Comando no reconocido".red);
}
