var Router = require("koa-router");
var articleModel = require("../model/ArticleModel");
var responseUtil = require("../util/ResponseUtil")

var articleRouter = new Router();


articleRouter.get("/REST/article/list", async (ctx, next) => {
    var {pageIndex, pageSize} = ctx.query;
    if (!pageIndex || !pageSize) {
        await articleModel.find().then(docs => {

            ctx.body = {
                code: "1",
                msg: "success",
                data: {
                    'articleList':docs
                }
            }
        }).catch(e => {
            console.log(e);
        })
    } else {
        pageSize = Number(pageSize);
        pageIndex = Number(pageIndex);
        await articleModel.find().limit(pageSize).skip((pageIndex - 1) * pageSize).then(docs => {
            ctx.body = {
                code: "1",
                msg: "success",
                data: {
                    'articleList': docs
                }
            }
        }).catch(e => {
            console.log(e);
        })
    }

})

articleRouter.post("/REST/article/add", async (ctx) => {
    var articleEntity = new articleModel(ctx.request.body);
    articleEntity.createTime = new Date();
    articleEntity.status = 1;
    articleEntity.viewNum = 0;
    await articleEntity.save().then(doc => {
        ctx.body = responseUtil.output("1", "添加成功", doc);
    }).catch(e => {
        console.log(articleEntity)
    })
})

articleRouter.get("/REST/article/detail", async (ctx) => {
    var id = ctx.query.id;
    var article = await articleModel.findById(id).then(article => {
        return article;
    }).catch(e => console.log(e));
    await articleModel.updateOne({_id: article._id}, {$set: {viewNum: article.viewNum + 1}}).then(doc => {
        article.viewNum = ++article.viewNum;
        ctx.body = responseUtil.output("1","成功",{detail:article});
    }).catch(e => {
        console.log(e);
    })
})




module.exports = articleRouter;