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
    await userModel.find({username:username,password:password}).then(userInfo=>{
        if(userInfo.length>0){
            ctx.cookies.set("userInfo",JSON.stringify(userInfo[0]));
            ctx.body=responseUtil.output("1","登录成功",{userInfo:userInfo[0]});
            return;
        }
        ctx.body=responseUtil.output("0","用户或密码不正确");
    }).catch(e=>{
        console.log(e);
        ctx.body=responseUtil.output("0","系统出错");
    })
});


userRouter.get("/REST/user/login",async (ctx,next)=>{
    const {username,password}=ctx.request.query;
    if(!username||!password){
        ctx.body=responseUtil.output("0","用户或密码不能为空");
        return;
    }
    await userModel.find({username:username,password:password}).then(userInfo=>{
        if(userInfo.length>0){
            ctx.cookies.set("userInfo", JSON.stringify(userInfo[0]));
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
    if (!ctx.cookies.get("userInfo") ){
        ctx.body=responseUtil.output("0","未登录",null);
    } else {
        ctx.body=responseUtil.output("1","已登录",{userInfo:JSON.parse(userInfo)})
    }
})


userRouter.get("/REST/article/list",async (ctx,next)=>{
    ctx.body={
        code: "1",
        msg: "success",
        data: {
            'articleList':[ {
                'id':  1,
                title: "标题",
                "description":"描述",
                content: "内容",
                img: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1061664783,4111033467&fm=173&app=49&f=JPEG?w=218&h=146&s=52943D8DE8A1680F15CD05E10300B096",
                createTime: new Date(),
                'viewNum': 1,
                'likeNum': 1
            }]
        }
    }
})



module.exports=userRouter;




