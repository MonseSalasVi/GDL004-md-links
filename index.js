const fs = require('fs') //Accede al archvivo
const path = require('path') //referencia del archivo
const  { validateExtension }  = require('./validateExtension.js'); // Destructuring de objetos ??????
const { constructionOptions } = require('./contructionOptions.js'); //Valida las opciones
const{arraydeobjetos} = require('./extraelinks') //extrae un array de todos los links y texto
const direction = process.argv[2] // /monsesalas/Desktop/GDL004-md-links/README.md ruta del archivo
const extension = path.extname(direction) //extension del archivo 
const esValidaLaExtension = validateExtension(direction); //retorna si es true o false la funcion
const params = process.argv; //del texto que ingresan
const options = constructionOptions(params); //Objeto con validate y stats
//console.log("Viene de mi funcion ", esValidaLaExtension); //true o false
//console.log("Viene de mi modulo  ", options); //true o false





// console.log(esValidaLaExtension) //true o false
// console.log(constructionOptions(params)) //validate:false stats:false
// console.log(arraydeobjetos(direction))








//node index.js /Users/monsesalas/Desktop/GDL004-md-links/README.md
//node index.js /Users/monsesalas/Desktop/GDL004-md-links/README.md --validate 
