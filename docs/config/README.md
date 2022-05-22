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

有关于`vite`的配置文档请参考：[配置 Vite](https://cn.vitejs.dev/config/)，关于代理服务器请看 [server.proxy - vite](https://cn.vitejs.dev/config/#server-proxy)。

> 更新中
