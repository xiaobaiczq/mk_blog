import Mock,{Random} from "mockjs";

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

function articleList(subNavId) {
    var title = ""
    if (subNavId == "1") {
        title = "javscript ";
    } else if (subNavId == "2") {
        title = "node js ";
    } else if (subNavId == "3"){
        title = "react ";
    }
    else {
        title = "操作系统 ";
    }
    var articleList = [];
    for (let i = 0; i < 3; i++) {
        articleList.push({
            id: i + 1,
            title: title+Random.first(),
            "description": Random.cparagraph(1),
            content: Random.cparagraph(4,10),
            img: Random.image("544x336",Random.hex(), '#FFF',Random.last()),
            createTime: Random.date(),
            'viewNum|1-100': 1,
            'likeNum|1-50': 1,
            href: 'http://ant.design'
        })
    }
    return {
        code: "1",
        msg: "success",
        data: {
            articleList: articleList
        }
    }
}

Mock.setup({
    timeout: 1000
})
Mock.mock(/\/REST\/navList/, navListTemplate);

Mock.mock(/\/REST\/articleList\?navId=1&subNavId=1/, articleList(1));
Mock.mock(/\/REST\/articleList\?navId=1&subNavId=2/, articleList(2));
Mock.mock(/\/REST\/articleList\?navId=1&subNavId=3/, articleList(3));
Mock.mock(/\/REST\/articleList\?navId=1&subNavId=4/, articleList(4));


export default Mock;
