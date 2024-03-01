---
layout: '../../layouts/BlogLayout.astro'
tags: [tech]
title: Chrome 109版本后，Event.path非标准属性已被去掉
publishDate: 2024-02-29
cover: "../../assets/images/content-19/content-19.jpg"
author: "Gomi"
name: "content-19"
---
## 问题解决
之前在项目中遇到一个奇怪的问题，运行得好好的产品突然一下，右键功能、鼠标点击弹窗等功能都出现了问题，要么就是点不出来，要么就是出来了关不了。

但很奇怪的是，代码没有任何改动，为什么之前功能都是OK的，现在却不行了。没办法，只有去打个断电，看看哪里出错了。最后排查报错，竟然是EventTarget.path属性没了？什么鬼，都用了几十年这个属性啦好吧！

然后再一看Chrome 109版本发布的最新公告，去掉了这个非标准属性，统一使用ComposedPath这个属性。于是赶紧给系统写了个Polyfill，打个补丁上去，让功能恢复正常。

```
/**
 * 兼容event.path方法，chrome 109已去掉event.path
 */
(function (event, window, document) {
    Object.defineProperties(event, {
        path: {
            get: function () {
                let target = this.target;
                const path = [];
                while (target.parentNode !== null) {
                    path.push(target);
                    target = target.parentNode;
                }

                path.push(document, window);

                return path;
            },
        },
        composedPath: {
            value: function () {
                return this.path;
            },
            writable: true,
        },
    });
})(Event.prototype, window, document);

```

现在虽然有些回复正常了，但有些功能还是有问题，需要用鼠标对象冒泡返回的所有元素进行查找，但还是找不到。经过测试发现，原来Event.path传出的值是个Copy出来的值，不存在引用，而ComposedPath则一直是个引用对象，所以当你在拿到ComposedPath后，鼠标移动到其他地方，这个值就会被改变。这就导致使用了setTimeout定时器的地方会获取不到正确的值。




