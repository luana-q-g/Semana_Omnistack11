const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create (request, response){
        //return response.send('Hello World');
        /*const params= request.query;
        console.log(params);   para acessar os query params*/
        /*const params= request.params;
        console.log(params);   para acessar route params*/
        
        const {name, email, whatsapp, city, uf}= request.body;
        const id= crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({id});
    },

    async index (request, response) {
        const ongs=  await connection('ongs').select('*');
    
        return response.json(ongs);
    }
};