var koa = require("koa");
var bodyparser = require("koa-bodyparser");
var  Router = require('koa-router')

var app = new koa();


app.use(bodyparser());
// app.use(async ctx => {
//     await console.log(ctx.request.body)
//     ctx.body = 'Hello World';
// });

var router=new Router();
router.get(/\/REST\/navList/,async (ctx,next)=>{
})

app.listen(3002, () => {
    console.log("server start in 3002");
});