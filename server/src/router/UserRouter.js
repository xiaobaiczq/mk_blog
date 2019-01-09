var Router = require('koa-router');
var userModel=require("../model/UserModel");
var articleModel=require("../model/ArticleModel");
var responseUtil=require("../util/ResponseUtil");

var userRouter= new Router();

userRouter.post("/REST/user/login",async (ctx,next)=>{
    const {username,password}=ctx.request.body;
    if(!username||!password){
        ctx.body=responseUtil.output("0","用户或密码不能为空");
        return;
    }
    await userModel.find({username:username.trim(),password:password.trim()}).then(userInfo=>{
        if(userInfo.length>0){
            ctx.cookies.set("userInfo",encodeURI(userInfo[0]),{maxAge:"Session"});
            ctx.body=responseUtil.output("1","登录成功",{userInfo:userInfo[0]});
            return;
        }
        ctx.body=responseUtil.output("0","用户或密码不正确");
    }).catch(e=>{
        console.log(e);
        ctx.body=responseUtil.output("0","系统出错");
    })
});





userRouter.get("/REST/user/isLogin",async (ctx,next)=>{
    var userInfo=ctx.cookies.get("userInfo");
    if (!userInfo ){
        ctx.body=responseUtil.output("0","未登录",null);
    } else {
        ctx.body=responseUtil.output("1","已登录",{userInfo:decodeURI(userInfo)})
    }
})






module.exports=userRouter;




