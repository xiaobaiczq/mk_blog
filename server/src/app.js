var koa = require("koa");
var bodyparser = require("koa-bodyparser");
var  Router = require('koa-router')
var path=require('path')
var static = require('koa-static')
var userRouter=require("./router/UserRouter");
var mongoose = require('mongoose');



var app = new koa();


app.use(bodyparser());



app.use(userRouter.routes()).use(userRouter.allowedMethods());

app.listen(8888, () => {
    mongoose.connect('mongodb://localhost/mk_blog');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'db connection error:'));
    db.once('open', function () {
        // we're connected!
        console.log("db connetcted")
    });
    console.log("server start in 8888");
});