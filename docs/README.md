---
home: true
heroText: ovx
tagline: 一个生成 vue + vite 的脚手架 CLI
footer: "<p>Copyright <a href='https://github.com/Jiaocz'>Orangii|橙梓</a> 2022.<br /><code>ovx</code> published under MIT, document published under CC-BY-4.0.</p><p><a href='https://beian.miit.gov.cn' target='_blank'>冀ICP备17024488号-4</a></p>"
footerHtml: true
externalLinkIcon: false
actions:
  - text: 快速上手
    link: /quick-start/README.md
    type: primary
  - text: 项目配置
    link: /config/README.md
    type: srcondary
---
# ovx <Badge type="tip" text="v2" vertical="top" />
[![Build Test](https://github.com/ovx-js/ovx/actions/workflows/build-test.yml/badge.svg)](https://github.com/ovx-js/ovx/actions/workflows/build-test.yml) [![License](https://img.shields.io/github/license/ovx-js/ovx)](https://github.com/ovx-js/ovx/blob/main/LICENSE)
## 介绍
**O̲rangii V̲ue Ex̲ample**

ovx是一个便捷生成 vue + vite 项目基础模板的cli工具，旨在快速搭建一个项目基础，已免去重复的工作，~~以及回想自己之前是怎么做的过程~~。

![ovx screenshot](/images/ovx.jpg)

::: details 一张 8 MB的使用录制GIF图
![ovx screen record](/images/ovx.gif)
:::

目前支持的项目模板有：
- Vue + vue-router + Element Plus + Element Icon + unplugin 自动导入
- Vue TSX + vue-router + Element Plus + Element Icon
- Vue + vue-router + Ant Design + Ant Design Icon + unplugin 自动导入
- ...

::: tip
_以上所讲 Vue 均指 Vue 3，且全部使用TypeScript。_
:::

## 使用
可以在npm全局安装或者npx的方式使用

### NPX <Badge type="tip" text="推荐" vertical="top" />

<CodeGroup>
  <CodeGroupItem title="NPM">

```bash:no-line-numbers
npx ovx@latest
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM" active>

```bash:no-line-numbers
pnpx ovx@latest
```

  </CodeGroupItem>
</CodeGroup>

::: tip
如果你的地区官方npm mirror速度不是很快，可以指定registry
```shell
npx ovx@latest --registry=https://registry.npmmirror.com
```
:::

### NPM 全局安装

<CodeGroup>
  <CodeGroupItem title="NPM">

```bash:no-line-numbers
npm i -g ovx@latest
ovx
```

  </CodeGroupItem>

  <CodeGroupItem title="PNPM" active>

```bash:no-line-numbers
pnpm add -g ovx@latest
ovx
```

  </CodeGroupItem>
</CodeGroup>

::: tip
同样的，你也可以使用`--registry`的方式指定registry镜像

或者你可以使用[CNPM](https://github.com/cnpm/cnpm)
:::

需要注意的是，使用npm全局安装只需要安装一次，后续可以使用`ovx`直接运行，但是需要注意的是npm**不会**自动更新ovx，因此需要有更新的时候手动更新。