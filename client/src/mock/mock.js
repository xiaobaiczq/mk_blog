import Mock, {Random} from "mockjs";

const navListTemplate = {
    code: "1",
    msg: "成功",
    data: {
        navList: [{
            id: "1",
            name: "JOTTING",
            displayName: "随笔",
            icon: "file-text",
            subNav: [
                {
                    id: "1",
                    name: "JAVASCRIPT",
                    displayName: "javascript",
                },
                {
                    id: "2",
                    name: "NODE",
                    displayName: "node js"
                },
                {
                    id: "3",
                    name: "REACT",
                    displayName: "react"
                },
                {
                    id: "4",
                    name: "OS",
                    displayName: "操作系统"
                },

            ]
        },
            {
                id: "2",
                name: "REPINT",
                displayName: "转载",
                subNav: [],
                icon: "cloud"
            },
            {
                id: "3",
                name: "FORME",
                displayName: "关于我",
                subNav: [],
                icon: "user"
            }
        ]
    }
}

function mockArticleList() {
    for (let i = 1; i <= 4; i++) {
        var articleList = [];
        var title = ""
        if (i == "1") {
            title = "javscript ";
        } else if (i == "2") {
            title = "node js ";
        } else if (i == "3") {
            title = "react ";
        }
        else {
            title = "操作系统 ";
        }
        [1, 2, 3, 4, 5].map(() => {
            articleList.push({
                'id|+1':  1,
                title: title + Random.first(),
                "description": Random.cparagraph(1),
                content: Random.cparagraph(4, 10),
                img: Random.image("544x336", Random.hex(), '#FFF', Random.last()),
                createTime: Random.date(),
                'viewNum|1-100': 1,
                'likeNum|1-50': 1,
                href: 'detail',
                navId:i,
                subNavId:i
            })
        });
        var mockData = {
            code: "1",
            msg: "success",
            data: {
                'articleList': articleList
            }
        }
        var regExp = new RegExp("\\/REST\\/article\/list\\?navId=1&subNavId=" + i);
        Mock.mock(regExp, mockData);
    }
}


const detailTemplate = {
    code:"1",
    msg:"success",
    data:{
        detail: {
            "id|+1": 1,
            title: Random.first(),
            "description": Random.cparagraph(1),
            content: Random.cparagraph(4, 10),
            img: Random.image("544x336", Random.hex(), '#FFF', Random.last()),
            createTime: Random.date(),
            'viewNum|1-100': 1,
            'likeNum|1-50': 1,
            href: 'detail'
        },
    }
};

const userTemplate = {
    code:"1",
    msg:"success",
    data:{
        userInfo: {
            "code": "1",
            "msg": "登录成功",
            "data": {
                "_id": "5c30c64c32628a22e8c06189",
                "username": "mark",
                "password": "123",
                "status": 1,
                "__v": 0
            }
        }
    }
};


Mock.setup({
    timeout: 1000
})
Mock.mock(/\/REST\/navList/, navListTemplate);
Mock.mock(/\/REST\/article\/detail/, detailTemplate);
Mock.mock(/\/REST\/user\/isLogin/, detailTemplate);
mockArticleList();

export default Mock;
