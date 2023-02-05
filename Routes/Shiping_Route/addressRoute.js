const express = require("express");
const shipAdd_route = express();

const bodyParser = require('body-parser');
shipAdd_route.use(bodyParser.json());
shipAdd_route.use(bodyParser.urlencoded({extended:true}));
const Controller = require('../../Controller/Shiping_API_Controller/addressControl')


shipAdd_route.post('/addShip', Controller.addShiping);


module.exports = shipAdd_route;