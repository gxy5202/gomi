---
layout: '../../layouts/BlogLayout.astro'
tags: [tech]
title: React Native 踩坑总结
publishDate: 2025-05-22
cover: "../../assets/images/content-more/react-native.webp"
author: "Gomi"
name: "content-22"
---
## 兼容性

在新公司分配的第一个任务就是移动端开发，虽然是零基础，但毕竟写了两年React，所以基本上在开发层面没有太阻碍，可以无缝上手。但RN最终是编译成ios和android端的原生代码，导致使用同样的前端思维逻辑去开发，在不同的平台上还是可能存在差异，这也是我觉得写这种跨平台最恼火的一个问题，兼容性。

这里的兼容性即存在两个平台不同的机制导致的，也存在一些第三方库对于不同平台的处理并不相同。

比如使用的[@sdcx/nested-scroll](https://www.npmjs.com/package/@sdcx/nested-scroll)这个支持嵌套滚动的库，它的`stickyHeight`属性，在android上表现正常，在ios上会导致内嵌的可滚动列表在吸顶后无法触发触摸后的滚动。而这已经是一个专为支持两个平台所写的库了。还有一些其他的机制导致的问题，先弹出一个`Toast.loading()`弹窗，然后将`Toast.hide()`，在这之后调用`Dialog.alert()`，在android上是没问题的，但ios上`Dialog`将无法正常显示。以下是Chatgpt的解释：

> 这是一个经典的 iOS 原生视图调度/刷新机制与 JS 执行时序冲突 的问题，很多开发者在 React Native 或 Taro 中都遇到过类似情况。iOS 的原生动画和视图移除是异步的！Toast.hide() 实际上是一个动画过程（淡出动画、遮罩移除等），它并不是同步完成的，在 hide() 之后立即调用 Dialog.alert() 时，iOS 还没完成 toast 的移除。Dialog.alert() 本质上是一个新的 modal 弹窗组件，如果此时还有一个 Toast 的遮罩（在 transition 中），iOS 原生层可能会阻止后一个视图的展示或导致遮挡。React Native 中的 Modal（Taro 的 Dialog 和 Toast 都可能基于它）在 iOS 上的行为是通过 UIViewController.present() 来呈现视图的。如果此时前一个 Modal（Toast）还没完全 dismiss，iOS 的 UI 系统就不会立即响应第二个 modal 的呈现请求。Android 的 modal 行为实现方式不同，更宽容，会“排队”处理这些动作。

## 样式
样式兼容遇到的就是border样式，直接使用css的虚线，dashed类型，在android上能正常渲染，但ios不行。于是就使用svg来实现。以及由于RN是基于flex布局的，使用的是[Yoga](https://github.com/facebook/yoga)渲染引擎，需要注意支持的css是有限的。很多你认为在web直接通过css就能实现的效果，在RN上很可能要采取另一种方式，比如伪元素。


## 调试
习惯了web开发，遇到任务问题直接打开浏览器的F12就能进行全量的调试，比如查看DOM，查看CSS样式，所见即所得，可以直接在调试工具中进行修改等，效率可以说非常高。但是RN的调试在模拟器或者真机上，比较有用的是log和network，一个用来看console.log以及错误信息，一个用来看网络请求抓包。但除了这两个，想要查看元素和样式，对于不懂IOS和android原生的开发者来说，即使看到也很难起到实质性作用，因为你写的是CSS，但是样式最终生成的是原生代码。举个最简单的例子，你写了一个margin-top:2px，但是你想验证下渲染出来的是否是真的2px，对我来是很烦躁的。同样的元素在不同的平台上也是编译成不同的原生代码。

我是用[flipper](https://fbflipper.com/)来进行调试，因为有log和network。其实也可以在启动react native的时候加上 `--experimental-debugger`属性，会启动官方的调试工具，但是由于版本的原因，没有network，所以就暂时不用。等升级了再用吧。

然后需要注意的是，flipper从官方安装的是一个node的代码包，并不是exe可执行文件。进入package目录执行 `node server.js` 可以启动。

## 问题解决
- `npx react-native doctor` 可检查错误
- `npx react-native clean` 清缓存
- android报错：**buildCMakeDebug[arm64-v8a] Failed** 和 **configureCMakeDebug[arm64-v8a] Failed**， 错误都与缓存问题有关。我每次都需要运行 `./gradlew clean` 和 `rm -rf .gradle` 才能使其正常工作
- `adb devices` 查看是否存在模拟设备
- 打包后的apk应用名为com.yxsk.dev，但是mainActivity为com.client。所以执行
`adb shell am start -n com.client_taro/com.client_taro.MainActivity`会报错
应该执行`adb shell am start -n com.yxsk.dev/com.client_taro.MainActivity`
- 无法安装时先强制安装 `adb install -r -d android/app/build/outputs/apk/debug/app-debug.apk`



