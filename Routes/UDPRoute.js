const express = require("express");
const udp_route = express();

const bodyParser = require('body-parser');
udp_route.use(bodyParser.json());
udp_route.use(bodyParser.urlencoded({extended:true}));
const controller = require('../Controller/UDPControlller');


udp_route.post('/add-udp_product', controller.userDiscountProduct);
udp_route.get('/udp_products', controller.getUDPs);
udp_route.get('/udp_product/:id', controller.getUDP);
udp_route.put('/udp_product/:id', controller.updateUDP);



module.exports = udp_route;