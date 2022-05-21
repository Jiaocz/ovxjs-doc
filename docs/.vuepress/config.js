const { pwaPlugin } = require('@vuepress/plugin-pwa')
// const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { searchPlugin } = require('@vuepress/plugin-search')
const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    lang: 'zh-CN',
    title: 'ovx - 一个生成 vue + vite 的脚手架',
    description: '一个生成 vue + vite 的脚手架，包含Element Plus、Ant Design等组件库及vue-router等生态',
    head: [
        ['link', { rel: 'shortcut icon', href: '/images/icons/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
        ['meta', { name: 'theme-color', content: '#ff9700' }],
        ['script', {}, 'window._mfq = window._mfq || []; (function() { var mf = document.createElement("script"); mf.type = "text/javascript"; mf.defer = true; mf.src = "https://orangii.cn/mouseflow/6589d873-01ff-44a5-b883-bee2ad228e24.js"; document.getElementsByTagName("head")[0].appendChild(mf); })();']
    ],

    port: 3333,
    open: false,

    theme: defaultTheme({
        navbar: [
            {
                text: '快速上手',
                link: '/quick-start/README.md',
            },
            {
                text: '项目配置',
                link: '/config/README.md',
            },
            // {
            //     text: '模板配置',
            //     children: [
            //         {
            //             text: 'Element Plus',
            //             link: '/',
            //         },
            //         {
            //             text: 'Element Plus TSX',
            //             link: '/',
            //         },
            //         {
            //             text: 'Ant Design',
            //             link: '/',
            //         },
            //     ]
            // },
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
        repo: 'Jiaocz/ovxjs-doc',
        repoLabel: '文档Github',
        docsRepo: 'https://github.com/Jiaocz/ovxjs-doc',
        docsBranch: 'master',
        editLink: true,
        editLinkText: '在 GitHub 上编辑此页',
        editLinkPattern: ':repo/edit/:branch/docs/:path',
        backToHome: '返回首页',
    }),

    plugins: [
        pwaPlugin({ skipWaiting: true }),
        // TODO
        // docsearchPlugin({}),
        searchPlugin({}),
    ],
}
