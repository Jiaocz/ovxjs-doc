# 快速上手
本页将带领你选择并使用 ovx 创建自己的项目基础。

## 在你开始前
在开始之前，首先你要有一定的 **HTML、CSS、JavaScript** 的基础，就像是 Vue 官方教程所说一样，否则直接上手框架及使用模板并不是一个很好的主意。

并且，在此之前，希望你有对 **<abbr title="ECMA Script 6">ES6</abbr>** 有一定了解，在模板中将使用 **<abbr title="ES Module">ESM</abbr>** 的方法将外部组件等进行引入。

本程序的预制均默认使用 **<font color="#42b883">Vue 3</font>**，如果你先前学习的是 Vue 2，你可以去学习一下 Vue 3 的一些新语法。
> 参考 [从 Vue 2 迁移](https://v3-migration.vuejs.org/)

本程序的所有模板均使用 TypeScript，虽然 TypeScript 也可以兼容 JavaScript，但是还是推荐你去学习 TypeScript 以体会到 TS 带来的便利。当然如果你不熟悉 TS，你也可以将全部变量定义为`any`类型，并使用`// @ts-ignore`取消ts检查的报错（如果你确定你写的 JS 没有问题）。

## 安装并使用
::: tip 参考
参考：[首页 > 使用](/#使用)
:::

## 选择模板
### SFC 还是 TSX？
#### SFC
<abbr title="Single File Component 单文件组件">SFC</abbr> 是一种特殊文本格式，能够让我们把一个Vue组件的模板（template）、逻辑（script）、样式（style）封装在单个`.vue`文件中，如下面的示例：

```vue:no-line-numbers
<script setup>
const greeting = ref("Hello World")
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style scoped>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
```

SFC是Vue的一个特点，它能够帮助你区分`template`、`script`及`style`，具体可以见 [单文件组件 - Vue](https://staging-cn.vuejs.org/guide/scaling-up/sfc.html)。并且可以使用`scoped`来限定`style`标签的作用范围仅限当前组件，也可以使用`<script setup>`来使用组合式API的编译时语法糖，详见[单文件组件 `<script setup>` - Vue](https://staging-cn.vuejs.org/api/sfc-script-setup.html)。

::: tip 提示
SFC 写法在选择器中被写作`vue-ts`
:::

#### TSX
如果你使用 React 进行过开发，那你应该对 TSX 语法比较熟悉。在 Vue 中，TSX 的开发是基于渲染函数 `h` 的，如果你有使用 Vue 生成 VNode 的经历应该对这个函数不陌生。

与 React 不同的是，虽然 Vue 也有<abbr title="Functional Components">函数式组件</abbr>，但是函数式组件自身没有任何状态，在渲染过程中也不会创建组件实例，并且跳过常规的组件生命周期，即**在函数式组件中你无法使用例如`onMounted`生命周期 API**。并且将函数式组件传递给 vue-router 时也会需要额外的操作，否则将会报错。

所以在 TSX 下创建一个 Vue 组件需要使用 `defineComponent` 函数，也就是 Vue 教程中的“在HTML中书写Vue”。
例如在[`defineComponent()` - Vue](https://staging-cn.vuejs.org/guide/typescript/overview.html#definecomponent)中的示例：]

```ts:no-line-numbers
import { defineComponent } from 'vue'

export default defineComponent({
  // 启用了类型推导
  props: {
    name: String,
    msg: { type: String, required: true }
  },
  data() {
    return {
      count: 1
    }
  },
  mounted() {
    this.name // 类型：string | undefined
    this.msg // 类型：string
    this.count // 类型：number
  }
})
```

或本项目模板中使用的 setup 方法：

```ts:no-line-numbers
import { defineComponent, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import logo from '../assets/logo.png';

export default defineComponent({
  setup() {
    onMounted(() => ElMessage.warning(<p>You have <b>Successfully</b> run this demo.</p>));
    return () => (
      <>
        <img src={logo} />
      </>
    );
  }
});
```

::: tip 提示
TSX 写法在选择器中被写作`vue-tsx`
:::

### Element Plus 与 Ant Design
请根据自己的项目实际需要的风格选择 UI 组件库。
- [Element Plus](https://element-plus.org/zh-CN/)
- [Ant Design](https://antdv.com/docs/vue/introduce-cn)

## 包管理器
`NPM` 完全可以用于安装依赖包，不过还是推荐你去查看 `PNPM` 与 `YARN`。
::: tip 提示
在工具生成项目基础模板文件后，将会询问是否自动执行`npm install`，如果选择“是（Y）”，将会自动使用`NPM`进行安装，否则请选择“否（N）”（否也是默认选项），然后在工程目录中手动执行安装依赖的命令。
:::

::: details PNPM
pnpm - 速度快、节省磁盘空间的软件包管理器

中文网： [https://www.pnpm.cn](https://www.pnpm.cn)

性能对比：[benchmarks](https://www.pnpm.cn/benchmarks)

安装：
```shell:no-line-numbers
npm install -g pnpm
```
:::

::: details YARN
安全、稳定、reproducible projects

中文文档： [https://www.yarnpkg.cn/](https://www.yarnpkg.cn/)

特性：[features](https://www.yarnpkg.cn/features)

安装：
```shell:no-line-numbers
npm install -g yarn
```
:::

## 代码编辑器
vite 推荐使用的代码编辑器是 [VS Code](https://code.visualstudio.com/) + Volar 插件，对 Vue 的语法有响应的提示。

[WebStorm](https://www.jetbrains.com/zh-cn/webstorm/) 也可以胜任，甚至在`unplugin`自动导入时，VS Code 可能出现组件无语法提示的情况，而 WebStorm 却可以，但是 WebStorm 是付费软件，需要额外购买。

::: tip
如果 VS Code 在`unplugin`自动导入时可能出现组件无语法提示，可以使用手动`import`的方式让 VS Code 去读取代码提示。
:::