const { pwaPlugin } = require('@vuepress/plugin-pwa')
const { pwaPopupPlugin } = require('@vuepress/plugin-pwa-popup')
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
                children: [
                    {
                        text: '通用配置',
                        link: '/config/',
                    }
                ]
            },
            {
                text: 'Github',
                link: 'https://github.com/Jiaocz/ovx'
            },
            {
                text: 'NpmJs',
                link: 'https://npmjs.com/package/ovx'
            }
        ],
        sidebar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '快速上手',
                link: '/quick-start/',
            },
            {
                text: '项目配置',
                collapsible: true,
                children: [
                    {
                        text: '通用配置',
                        link: '/config/',
                    }
                ]
            },
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
        pwaPlugin({ skipWaiting: false }),
        pwaPopupPlugin({
            locales: {
                '/': {
                    message: '发现新内容可用',
                    buttonText: '刷新',
                }
            },
        }),
        // TODO
        // docsearchPlugin({}),
        searchPlugin(),
    ],
}
