const connection= require('../database/connection');
module.exports={
    async create(request, response){
        const{id}= request.body;
        const ong = await connection('ongs').where('id',id).select('name').first();

    if(!ong){
        return responsse.status(400).json({error:"No ONG found with this id"});
    }
     return response.send(ong)
    }
}