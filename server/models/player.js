var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: String,
    prefPos: String,
    games: Object  
}, {timestamps: true})

var Player = mongoose.model('Player', PlayerSchema);