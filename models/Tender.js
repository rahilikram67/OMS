const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    customer: String,
    description: String,
    deadline: Date,
    date: Date,
    lastDate: Date,
    responsible: String,
    info: String,
    information: String,
    underlag: String,
    svar: String,
    requirements: String,
});

const Model = mongoose.model('Tender', schema);

module.exports = Model;
