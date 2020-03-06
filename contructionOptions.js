module.exports.constructionOptions = (params) => {
    // params siempre debes ser un ARRAY
    const options = {
        validate:false,
        stats: false
    }

    if (params.indexOf('--validate'|| '--v') > -1) {
        //console.log('Existe el validate');
        options.validate = true;
        
    } 
    
    if (params.indexOf('--stats' || '--s') > -1) {
        //console.log('Existe el stats');
        options.stats = true;
        
    }
    // Esta funcion siempre debe de retornar un OBJETO
    return options // options: es un objeto
}