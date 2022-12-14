const jwt = require('jsonwebtoken');
const config = require('../config/dev');
const joi = require('joi');
const database = require('./database');
const bcrypt = require('bcrypt');

module.exports = {
    login: async function (req, res, next) {
        const reqBody = req.body;

        const schema = joi.object({
            email: joi.string().required().min(6).max(255).email(),
            password: joi.string().required().min(6),
        });

        const { error, value } = schema.validate(reqBody);

        console.log(value);

        

        if (error) {
            console.log(error.details[0].message);
            res.status(401).send('Unauthorized (validations)');
            return;
        }

        const sql = "SELECT * FROM users WHERE email=?";

        try {
            const result = await database.query(sql, value.email);
            console.log(result[0]);
            const user = result[0][0];
            console.log(result[0], value.email);
            /* console.log("result: ", result[0], "|| user: ", user, value.email); */
            const validPassword = await bcrypt.compare(value.password, user.password);
            if (!validPassword) throw 'Invalid password';

            const param = { email: value.email };
            const token = jwt.sign(param, config.JWT_SECRET, { expiresIn: '72800s' });
            

            res.json({
                token: token,
                id: user.id,
                name: user.name,
                email: user.email
            });
            
        }
        catch (err) {
            console.log(`Error: ${err}`);
            res.status(401).send('Unauthorized');
            return;
        }
    },

    registerUser: async function (req, res, next) {
        
        const schema = joi.object({
            name: joi.string().required().min(2).max(50),
            email: joi.string().required().email().min(6).max(255),
            password: joi.string().required().min(6).max(32),
        });

        const { error, value } = schema.validate(req.body);

        

        if (error) {
            console.log(error.details[0].message);
            res.status(400).send('error sign up new user');
            return;
        }

        const sql = `INSERT INTO users(name, email, password) VALUES(?,?,?)`;

        try {
            const hash = await bcrypt.hash(value.password, 10);
            const result = await database.query(sql, [
                value.name,
                value.email,
                hash
            ]);

            res.json({
                id: result[0].insertId,
                name: value.name,
                email: value.email
            })
        }catch (err){
            if (err.code === 'ER_DUP_ENTRY'){
                res.send('Email is already in use. Please enter another email.')
            } else{
                res.status(400).send('Something went wrong, please try again.')
            }
            console.log(err);
    }
}
}