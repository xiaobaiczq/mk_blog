var koa = require("koa");
var bodyparser = require("koa-bodyparser");
var Router = require('koa-router')
var path = require('path')
var static = require('koa-static')
var userRouter = require("./router/UserRouter");
var articleRouter = require("./router/ArticleRouter");
var mongoose = require('mongoose');
var fs = require("fs");


var app = new koa();
var distPath=path.join(__dirname , '../../client/dist');
app.use(static(distPath,{maxage:1000*60*60*24*7}));
app.use(static(__dirname + '/static',{maxage:1000*60*60*24*7}));
app.use(bodyparser());


function readBuildJS() {
    return new Promise((resolve, reject) => {
        var body = "";
        var readStream = fs.createReadStream(path.join(distPath,"index.html"));
        readStream.on("data", (chunk) => {
            body += chunk.toString();
        })
        readStream.on("end", () => {
            resolve(body)
        })
    })

}


app.use(async (ctx, next) => {
    if (ctx.request.path == '/') {
        var body = await readBuildJS();
        ctx.response.set("content-type", "text/html");
        ctx.body=body;
        // ctx.response.redirect("/dist","/index.html")
    } else {
        await next();
    }
})

app.use(userRouter.routes()).use(userRouter.allowedMethods());
app.use(articleRouter.routes()).use(articleRouter.allowedMethods());

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