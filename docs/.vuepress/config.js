/*
 * @Author: Hilla
 * @Date:   2022-05-16 23:56:40
 * @Last Modified by:   Hilla
 * @Last Modified time: 2022-06-02 18:03:32
 */
module.exports = {
    title: 'tinyblckc0000al',
    description: '前端学习记录',
    themeConfig: {
        sidebar:'auto',//还可以分别显示，之后再搞
        logo:'/assets/7bb94737ccf45e840c5d4df985ee4e45.jpg',
        nav: [{ text: "主页", link: "/" },
                { text:"前端学习",
            items : [
                {text: "前端项目", link: "/frontend/project/"},
                {text: "前端基础", link: "frontend/essential/"}
                ]
            },
            { text: "随感随悟", link: "/memos/" },
            { text: "面经", link: "/interview/" },
            { text: "问题汇总", link: "/problems/" },
            { text: "node.js", link: "/node/" },
            {
                text: "收藏",
                items: [
                    { text: "github", link: "/stars/github/" },
                    { text: "博客", link: "/stars/blogs/" },
                    { text: "视频", link: "/stars/videos/" },
                    { text: "书籍", link: "/stars/books/" }
                ]
            }
        ]
    },
    plugins: [
    [`@vuepress/back-to-top`],
    ['@vuepress/nprogress'],
    ['@vuepress/pwa',
    {
        serviceWorker: true,
        updatePopup: true,
    }]
    ]
}