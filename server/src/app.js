var koa = require("koa");
var bodyparser = require("koa-bodyparser");
var  Router = require('koa-router')
var path=require('path')
const static = require('koa-static')

var app = new koa();


app.use(bodyparser());
// app.use(async ctx => {
//     await console.log(ctx.request.body)
//     ctx.body = 'Hello World';
// });
const staticPath = './dist'

app.use(static(
    path.join( __dirname,  staticPath)
))

var router=new Router();
router.get(/\//,async (ctx,next)=>{
    ctx.redirect('/dist/index.html');
})

app.listen(9000, () => {
    console.log("server start in 9000");
});