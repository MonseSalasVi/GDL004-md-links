const fs = require('fs') //Puede leer archivos
const path = require('path') //es el archivo que va a leer

if (path.extname != '.md' ){
    console.log('No es archivo md')
} else{
    console.log('Es un archivo md')
}




/*const markdownLinkExtractor = require('markdown-link-extractor')
const markdown = fs.readFileSync('README.md').toString(); //muestra mi readme
//console.log(fs.readFileSync(process.argv[2], 'utf8')) //retorna buffer el readme (con utf8 retorna readme)
const links = markdownLinkExtractor(markdown);
links.forEach(function (link) {
    //console.log(link); //muestra los links de mi readme
    
}); */



 


//console.log(typeof link)
//node index.js /Users/monsesalas/Desktop/GDL004-md-links/README.md