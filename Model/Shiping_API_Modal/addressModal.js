const mongoose = require('mongoose');

const to_address = new mongoose.Schema({
    name: {
        type: String,
    },
    street1:{
        type: String, 
    }, 
    city: {
        type: String, 
    },
    state: {
        type: String,
    },
    zip: {
        type: String,
    },
    country:{
        type: String,
    },
    phone: {
        type: String,
    },
});

const from_address = new mongoose.Schema({
    name: {
        type: String,
    },
    street1:{
        type: String, 
    }, 
    city: {
        type: String, 
    },
    state: {
        type: String,
    },
    zip: {
        type: String,
    },
    phone: {
        type: String,
    },
});

const parcel = new mongoose.Schema({
    length: {
        type: String,
    },
    width:{
        type: String, 
    }, 
    height: {
        type: String, 
    },
    weight: {
        type: String,
    }
});
const Shipment = new mongoose.Schema({
    to_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'to_address'
    },
    from_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'from_address'
    },
    parcel:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'parcel'
    }
});

const shipmentSchema = mongoose.model('Shipment', Shipment);
const to_addressSchema = mongoose.model('to_address', to_address);
const from_addressSchema = mongoose.model('from_address', from_address);
const parcelSchema = mongoose.model('parcel', parcel);

module.exports = { shipmentSchema, to_addressSchema, from_addressSchema, parcelSchema }