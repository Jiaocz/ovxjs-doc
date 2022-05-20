const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    lang: 'zh-CN',
    title: 'ovx - 一个生成vite + vue的脚手架',
    description: '一个生成vite + vue的脚手架，包含Element Plus、Ant Design等组件库及vue-router等生态',
    head: [['link', {rel: 'shortcut icon', href: 'https://orangii.cn/favicon.ico'}]],

    port: 3333,
    open: false,

    theme: defaultTheme({
        navbar: [
            {
                text: 'Github',
                link: 'https://github.com/Jiaocz/ovx'
            },
            {
                text: 'NpmJs',
                link: 'https://npmjs.com/package/ovx'
            }
        ],
        logo: 'https://static.orangii.cn/avatar/logo.svg',
        repo: 'iaocz/ovxjs-doc',
        repoLabel: '文档Github',
        editLink: true,
        editLinkText: '在 GitHub 上编辑此页',
        editLinkPattern: ':repo/edit/:branch/docs/:path',
        notFound: '未找到',
        backToHome: '返回首页',
    })
}
