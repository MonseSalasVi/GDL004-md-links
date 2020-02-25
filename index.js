const fs = require('fs') //Puede leer archivos
const path = require('path') //es el archivo que va a leer
const  { validateExtension }  = require('./validateExtension.js'); // Destructuring de objetos ??????
const { constructionOptions } = require('./contructionOptions.js');
const direction = process.argv[2] // /monsesalas/Desktop/GDL004-md-links/README.md ruta del archivo
extension = path.extname(direction) //extension del archivo 
const {leerArchivo} = require('./leer') //retorna el redme en string

 //console.log(extension) // .md

 const params = process.argv; //del texto que ingresan

const esValidaLaExtension = validateExtension(direction);
 const options = constructionOptions(params);
//console.log("Viene de mi funcion ", esValidaLaExtension); //true o false
//console.log("Viene de mi modulo  ", options); //true o false
//console.log('debe leer mi archivo', leerArchivo(direction)) //readme completo






// console.log(options)
// console.log(validateExtension);




// if(extension === '.md') {
//     console.log('Es un archivo md')
// var markdownLinkExtractor = require('markdown-link-extractor');
// var markdown = fs.readFileSync('README.md').toString();
// var links = markdownLinkExtractor(markdown);
//     links.forEach(function (link) {
//         console.log(link);
//     });
    
// } else {
//     console.log('No es archivo md')
// }
// return false




 
//node index.js /Users/monsesalas/Desktop/GDL004-md-links/README.md
//node index.js /Users/monsesalas/Desktop/GDL004-md-links/README.md --validate 
