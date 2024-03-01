---
layout: '../../layouts/BlogLayout.astro'
tags: [tech]
title: 大型Web项目中，单元测试的必要性与负担
publishDate: 2024-03-01
cover: "../../assets/images/content-20/content-20.jpg"
author: "Gomi"
name: "content-20"
---
## 前言

我的上家公司中，项目都是基于Webpack + Vue3技术栈，使用Webpack主要是因为**模块联邦**。考虑到后续生态维护以及对Vue组件的测试，基于Vue的项目我们不再直接使用**Jest**作为测试基础框架，进而采用官方推荐的**Vitest**进行测试。针对Vue组件引入**@testing-library/vue**和**@vue/test-utils**库（前者是基于后者的，前者侧重于应用中的组件测试，不关注组件的实现细节，而后者比较适合基础组件库进行测试，用于测试组件实现细节），进行组件级别的测试。

由于Vitest是基于Vite的，我们将同时存在Webpack和Vite，Vite和Vitest目前可以仅作为测试框架使用。  
针对项目特点，我们只需要引入**vitest**和**@testing-library/vue**即可。
## 测试框架接入
### 1.安装
```bash
pnpm add vite vitest happy-dom @testing-library/vue -D
```
**VSCode可安装Vitest插件辅助调试**
### 2.配置vitest
根目录新建vite.config.ts配置文件
```typescript
import { defineConfig } from 'vite';
export default defineConfig({
  	...
    test: {
	      // 启用类似 jest 的全局测试 API
        globals: true,
        // 使用 happy-dom 模拟 DOM
        environment: 'happy-dom',
        // 针对jsx文件
        transformMode: {
            web: [/.[tj]sx$/]
        },
        css: false
		},
});

```

## 测试调试
### 1.测试内容
如果针对Vue组件进行测试，则需要引入**@vue/test-utils**或**@testing-library/vue**。
如果只是测试**工具方法**，则使用方式和**Jest相似**，无需再引入其他库。
```typescript
// manage.test.ts
import { shallowMount, mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import omit from 'share/util/tools/omit';
import FilterBar from '../views/CardManage/components/FilterBar';

// vue组件测试
test('mount component', () => {
  const wrapper = mount(FilterBar);
  expect(wrapper.html()).toMatchSnapshot();
})

// 工具方法测试
test('mount component', () => {
  const obj = { a: 1, b: 2 };
  expect(omit(obj, ['a'])).toStrictEqual({ b: 2 });
})


```

### 2.测试命令
package.json增加test: 'vitest' --coverage生成覆盖率报告
```typescript
"test": "vitest --coverage",
```

## 测试目标
我们的测试目标以尽量**减少集成测试中的bug**为目标，那么就要求我们在开发过程中时刻高要求我们的代码质量，包括各种边界情况的考虑。但是又不能影响正常开发的进度和成为我们开发的负担。
所以目前考虑我们测试内容范围如下：
### 1.主要测试单元

- 1.工具方法（必须）
- 2.路由（必须）
- 3.接口 （非必须）
- 4.组件 （非必须）

### 2.测试用例精度
- 1.**工具方法**：要求精度最高，比如边界情况应该考虑全面，所有异常值等都要包含在内。因为工具方法往往只存在输入和输出，并且用的模块比较广泛，一旦出现bug，影响会比较大。
- 2.**路由**：一般来说前端路由使用的router类库，并且路由都是固定的几个，那么只需要保证跳转的路由地址正确和内容渲染的是对应的组件即可
- 3.**接口：**由于接口往往是联调阶段会进行多次调整，存在变动的几率较大，目前暂不做要求。
- 4.**组件**：组件级别的测试，如果不是UI类库的开发，业务组件我们不需要关注组件内部实现细节，只需要关注组件是否正常渲染，一些关键事件触发是否能渲染出预期结果即可。
### 2.测试覆盖率要求
那么在单元测试当中，我们要求测试覆盖率为下。
**工具方法：**覆盖率达到**100%**（自己写的工具方法都应写单元测试，并完全通过测试，这是最重要的一部分）
**接口测试**：**(待定)**
**组件测试**：达到**70%**即可（组件级别测试目前还在预研中，要怎么测试，达到什么程度。依赖的一些库也可能存在问题，如存在问题可暂时不测试）。

| **覆盖率指标名称** | **含义** |
| --- | --- |
| %stmts（statement coverage） | 语句覆盖率：是不是每个语句都执行了 |
| %Branch（branch coverage） | 分支覆盖率：是不是每个if代码块都执行了 |
| %Funcs（function coverage | 函数覆盖率：是不是每个函数都调用了 |
| %Lines（line coverage） | 行覆盖率：是不是每一行都执行了 |


vitest会生成报告，也可直接查看coverage文件夹下生成的报告。

### 思考点：

- 1. 单测本身不是目的，单测是为了给业务迭代/技术重构等提供更好的保障，所以还是看目标而定。如果要落地，优先看业务核心是什么，基于核心来慢慢提高覆盖率
- 2. 维护单测也是一个比较大的成本，如果业务经常会变，那单测可能会成为负担，所以也要看项目的现状，这个从技术侧的角度来说，跟偏向于技术架构的设计，是否有一定的前瞻性，如果做的不好导致经常重构，那单测确实是会成为比较大的负担
- 3. 单测本身其实对技术实现也是有要求的，提升单测的要求，从侧面也可以推动代码实现朝着更高可测性的方向去，对代码质量也是一种提高

讨论：
- 1.基础库，公共方法等必要性大 ex: fe-utils 测试覆盖率 90% - 100%
- 2.业务开发不涉及UI测试，纯函数进行单元测试
- 3.写单元测试的标准
- 4.以往的业务功能等，未做单元测试的，优先级放低，有时间再补
- 5.首次推行，测试覆盖率60% - 70%
- 6.测试用例负责人，修改功能者和功能负责人

## 官方文档参考
[Vite](https://cn.vitejs.dev/config/)
[Vitest]()
[@testing-library/vue](https://testing-library.com/docs/vue-testing-library/examples/)
[@vue/test-utils](https://test-utils.vuejs.org/guide/)


