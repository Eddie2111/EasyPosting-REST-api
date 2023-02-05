const mongoose = require('mongoose');

const udpSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    newPrice : {
    type: Number,
    default:0
    }
});

module.exports = mongoose.model('UDP', udpSchema);