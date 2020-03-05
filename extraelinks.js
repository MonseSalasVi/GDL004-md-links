const fs = require('fs'); //Puede leer archivos

module.exports.arraydeobjetos = (path) => {
  const fullLinkOnlyRegex = /\[(.*)\]\((http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))\)/gm;
 let  expreg = /\[(.*)\]\((.*)\)/; //expresion que tiene dons grupos (el texto y link)
  let total = []; //variable que guarda los links
  const readFile = fs.readFileSync(path, 'utf8'); //lee el archivo
  let links = readFile.match(fullLinkOnlyRegex); //busca la expreg en el archivo
  //console.log(links)
  for (i = 0; i < links.length; i++) { //itera mi archivo
    //   console.log(links[i])
    let separar = expreg.exec(links[i]); //separa en 2 grupos el link
    //console.log(separar);
    let result = {
        texto: separar[1],
        href: separar[2],
        file: path }
        //console.log(total)
        total.push(result);
    }
    console.log(total);
  }

