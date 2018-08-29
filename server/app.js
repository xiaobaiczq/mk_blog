var koa=require("koa");
var app = new koa();

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3001,()=>{
    console.log("server start in 3001");
});