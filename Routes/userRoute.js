const express = require("express");
const user_route = express();

const bodyParser = require('body-parser');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));
const controller = require('../Controller/userController');


user_route.post('/register', controller.register_user);


module.exports = user_route;