const Objects = require('../models/ta03-model');

exports.getAllData = (req, res, next) => {
    Objects.fetchAll();
}