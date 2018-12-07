require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const massive= require('massive');
const controller = require('./controller')
const{PORT}= process.env

const app = express();

massive(process.env.CONNECTION_STRING)
.then((dbInstance)=> {
    app.set('db', dbInstance)
})
    
    app.use(bodyParser.json());
    

app.get('/api/houses', controller.getAllHouses)
app.post('/api/houses/add', controller.createHouse)
app.delete('/api/houses/delete', controller.deleteHouses)









    app.listen(PORT, () => {
        console.log(`**Server Listening to Port ${PORT}**`)
    });
    

