import Mock from "mockjs";

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
                    name: "JAVA",
                    displayName: "java"
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


Mock.mock(/\/REST\/navList/, navListTemplate);


export default Mock;
