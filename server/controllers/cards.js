const database = require('./database');
const joi = require('joi');


module.exports ={
    getAllCards: async function (req,res,next){
        
        const sql = `SELECT * FROM business_cards`
        try{

            const result = await database.query(sql);
            res.json(result[0])

        }catch(err){
            console.log(err);
        }
    }
}