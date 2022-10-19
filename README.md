RUN THE APP:

    SET DEBUG=biz-ad:_ & npm start 
    |OR| 
    SET DEBUG='biz-ad:_'; npm start

_____________________________________________

 Database tables and fields:

    Database name: set up in config file!

    users: id, name, email, password
    services: service_id, name, status, comment
    business_cards: id, uid, name, description, phone, address, siteURL, imgURL


 ____________________________________________

Empty config/dev template:

    module.exports = {
        DB_HOST: '',
        DB_USER: '',
        DB_PASSWORD: '',
        DB_DATABASE: '',

        //AUTH
        JWT_SECRET: '',

    }