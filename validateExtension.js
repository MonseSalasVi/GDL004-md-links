const path = require('path');

module.exports.validateExtension = (direction) => {
    const extension = path.extname(direction)
    if(extension === '.md') {
        //console.log('Puedes utilizar un --validate o --stats')
        return true;
        
    } 
    //console.log('No es un archivo .md (:')
    return false
}

