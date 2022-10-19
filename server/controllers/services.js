const database = require("./database");
const joi = require("joi");

module.exports = {
  getAllServices: async function (req, res, next) {
    const sql = `SELECT * FROM services`;
    try {
      const result = await database.query(sql);
      res.json(result[0]);
    } catch (err) {
      console.log(err);
    }
  },

  deleteService: async function (req, res, next) {
    const param = req.body;

    const schema = joi.object({
      service_id: joi.number().required(),
    });

    const { error, value } = schema.validate(param);

    if (error) {
      console.log(error.details[0].message);
      return;
    }

    const sql = "DELETE FROM services WHERE service_id=?";

    try {
      await database.query(sql, [value.service_id]);
      res.json({ service_id: req.body.service_id });
      console.log("Service was successfuly deleted");
    } catch (err) {
      res.status(400).send("Error while deleting user");
      console.log(err);
    }
  },

  updateService: async function (req, res, next) {

    const reqBody = req.body;
    
        

        const schema = joi.object({
            status: joi.string().required(),
            comment: joi.string()
        }).min(1);

        

        const { error, value } = schema.validate(reqBody);
        
        console.log("reqbody: ", reqBody);
        
        if (error) {
           console.log(error);
            res.status(400).send(`Error updating service: ${error}`);
            return;
        }
       
        /* console.log("values in controller: ", value); */
        const keys = Object.keys(value[0]);   
        const values = Object.values(value[0]); 
        const fields = keys.map(key => `${key}=?`).join(',');
        
        
       
        values.push(req.params.service_id);


        const sql = `UPDATE services SET ${fields} WHERE service_id=${reqBody[0].service_id}`;

        try {
            const result = await database.query(sql, values);
            console.log(sql);
            res.json(value);
        }
        catch (err) {
            console.log(err);
            return;
        }

  },

  findService: async function (req, res, next) {
    const schema = joi.object({
      service_id: joi.number().required(),
    });

    const { error, value } = schema.validate(req.params);

    if (error) {
      res.status(400).send(`search error: ${error}`);
    }

    const sql = `SELECT * FROM services WHERE service_id=?`;

    try {
      const result = await database.query(sql, [value.service_id]);

      res.json(result[0]);
      
    } catch (err) {
      res.status(400).send(`search error: ${err}`);
    }
  },
};
