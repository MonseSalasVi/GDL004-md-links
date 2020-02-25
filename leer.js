const fs = require('fs') //Puede leer archivos


module.exports.leerArchivo = (direction) => {
    fs.readFile(direction, function (err, data) {
            if (err) throw err;
            console.log( data.toString() );
            return 
        });
        
};