const path = require('path');

module.exports.validateExtension = (direction) => {
    const extension = path.extname(direction)
    if(extension === '.md') {
        console.log('Es un archivo md')
        return true;
        
    } 
    console.log('No es archivo md')
    return false
}

