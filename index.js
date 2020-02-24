const fs = require('fs') //Puede leer archivos
const path = require('path') //es el archivo que va a leer

const  { validateExtension }  = require('./validateExtension.js'); // Destructuring de objetos ??????
const { constructionOptions } = require('./contructionOptions.js');
const direction = process.argv[2] // /monsesalas/Desktop/GDL004-md-links/README.md ruta del archivo
extension = path.extname(direction) //extension del archivo 
// console.log(extension)
var markdownLinkExtractor = require('markdown-link-extractor');
var markdown = fs.readFileSync('README.md').toString();
var links = markdownLinkExtractor(markdown);


 const params = process.argv;

const esValidaLaExtension = validateExtension(direction);
console.log("Viene de mi funcion ", esValidaLaExtension);
const options = constructionOptions(params);
console.log("Viene de mi modulo  ", options);


// console.log(options)


// console.log(validateExtension);




// if(extension === '.md') {
//     console.log('Es un archivo md')
//     links.forEach(function (link) {
//         console.log(link);
//     });
    
// } else {
//     console.log('No es archivo md')
// }
// return false




  







//console.log(typeof link)
//node index.js /Users/monsesalas/Desktop/GDL004-md-links/README.md
