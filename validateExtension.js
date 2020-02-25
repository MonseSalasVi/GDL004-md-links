const path = require('path');

module.exports.validateExtension = (direction) => {
    const extension = path.extname(direction)
    if(extension === '.md') {
        //console.log('Es un archivo md')
        return true;
        
    } 
    console.log('Por favor haz un --help para mas informacion (:')
    return false
}

