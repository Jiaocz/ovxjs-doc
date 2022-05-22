# 通用配置
本页将介绍项目中通用的预设配置项及参考文档。

## `package.json`
文件位于项目根目录中，其中配置了项目的各项依赖包，以及一下几个脚本（script）

- `dev`: 启动调试服务器
- `build`: 构建项目
- `preview`: 打开预览服务器预览构建完成的项目
- `lint`: 进行语法检查
- `lint:fix`: 语法检查并修复
- `type-check`: TypeScript 语法检查

使用`npm run <command>`运行命令，例如`npm run dev`。

参考配置文档：[package.json - npmjs docs](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

## `vite.config.ts`
文件位于项目根目录中，其中是[vite](https://cn.vitejs.dev/)的相关配置

所有项目都默认配置了一个api转发代理，即向`/api`的请求全部转发至`https://example.com`
```ts{3-6}
server: {
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'https://example.com',
      }
    },
    https: false,
  }
```
第8行设置了调试服务器不使用HTTPS。

有关于`vite`的配置文档请参考：[配置 - Vite](https://cn.vitejs.dev/config/)，关于代理服务器请看 [server.proxy - vite](https://cn.vitejs.dev/config/#server-proxy)。

## ESLint
文件是位于项目根目录中的`.eslintrc.js`，其中配置了ESLint的相关配置。

::: details 规则集
- env
  * `browser`
  * `es2021`
  * `vue/setup-compiler-macros` => 使用 setup 语法
- extends
  * `eslint:recommended`
  * `plugin:vue/essential`
  * `plugin:@typescript-eslint/recommended`
  * `./.eslintrc-auto-import.json` => 不一定存在，由`unplugin-auto-import`自动生成，仅存在unplugin模板中
- `ignorePatterns` => 忽略文件集
- rules
  * `vue/multi-word-component-names`
  * `vue/no-multiple-template-root`
  * `@typescript-eslint/no-explicit-any`
  * `brace-style`
  * `object-curly-spacing`
  * `max-len`
  * `no-trailing-spaces`
  * `eol-last`
  * `quotes`
  * `no-console`
:::

以上`rules`均默认`error`级别。

ESLint 文档：[ESLint](https://eslint.org/)

ESLint 规则集参考：[Rules - ESLint](https://eslint.org/docs/rules/)，[Rules - eslint-plugin-vue](https://eslint.vuejs.org/rules/)，[Supported Rules - typescript-eslint](https://typescript-eslint.io/rules/)。

## 其余配置
其他配置文件都是由 [create-vite](https://www.npmjs.com/package/create-vite) 生成，它们的文档是：
- [TypeScript](https://www.typescriptlang.org/zh/)

以下文档不一定在所有项目模板中都有，他们将在存在的项目模板配置页详解
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 自动导入方法
- [unplugin-icons](https://github.com/antfu/unplugin-icons) 自动导入图片
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 自动导入 Vue 组件
