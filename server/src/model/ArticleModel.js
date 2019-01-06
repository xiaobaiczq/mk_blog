var mongoose = require("mongoose");

var articleSchema = new mongoose.Schema({
    title: 'string',
    description: 'string',
    content: 'string',
    img: 'string',
    createTime: 'date',
    viewNum: 'number',
});

var articleModel = new mongoose.model('article', articleSchema, 'article');

module.exports = articleModel;
