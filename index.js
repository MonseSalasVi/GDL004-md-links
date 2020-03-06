const fs = require('fs') //Accede al archvivo
const path = require('path') //referencia del archivo
const  { validateExtension }  = require('./validateExtension.js') // Destructuring de objetos ??????
const { constructionOptions } = require('./contructionOptions.js') //Valida las opciones
const{extraelinks} = require('./extraelinks') //extrae un array de todos los links y texto

 //Objeto con validate y stats
//console.log("Viene de mi funcion ", esValidaLaExtension); //true o false
//console.log("Viene de mi modulo  ", options); //true o false



function mdlinks(){
    const params = process.argv //del texto que ingresan
    const direction = process.argv[2] // /monsesalas/Desktop/GDL004-md-links/README.md ruta del archivo
    const esValidaLaExtension = validateExtension(direction) //retorna si es true o false la funcion


        if(esValidaLaExtension === true){
            const options = constructionOptions(params)
            const links = extraelinks(direction)
            console.log(links)
        }else{
            console.log('error')
        }

}



mdlinks()






//console.log(constructionOptions(params))
// console.log(params)

// console.log(constructionOptions(params))
// console.log(esValidaLaExtension) //true o false
// console.log(constructionOptions(params)) //validate:false stats:false
 //console.log(extraelinks(direction))








//node index.js /Users/monsesalas/Desktop/GDL004-md-links/README.md
//node index.js /Users/monsesalas/Desktop/GDL004-md-links/README.md --validate 
