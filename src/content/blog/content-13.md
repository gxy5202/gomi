---
layout: '../../layouts/BlogLayout.astro'
tags: [tech]
title: JavaScript基础学习——面向对象（对象创建之工厂模式）
publishDate: 2019-04-29
cover: "../../assets/images/content-13/content-13.webp"
author: "Gomi"
name: "content-13"
---
前言
==

上一章回顾了JS对象的属性类型，那么除了我们常用的`new Object()`构造函数创建对象和字面量方式创建对象的方式外，还需要用到更多的模式来解决对象被多次复用的问题。什么意思呢？就是我们很有可能会在各个地方去使用已经创建过的对象，但是对象里的属性值有可能是不同的。举个例子：

```
let obj = {
  name:"勾鑫宇",
  age:18，
  myName:function(){
    console.log(this.name)
  }
}
```
如果我们想继续使用这个obj对象，但里面的属性值需要改变，我们可能会想到这样做：

```
let obj2 = obj;
obj2.name = "张三";
```
但是这样做有一个问题，由于JS中引用类型的机制，当你修改`obj2`的同时，`obj`也被改变了。所以我们就不得不像下面这样再重新创建一个`obj2`对象。

```
let obj2 = {
  name:"张三",
  age:23,
  myName:function(){
    console.log(this.name)
  }
}
```
这样就无形中给我们增加了很多工作，代码量也会大大增加，而这么多重复的东西是完全没必要的。于是我们就需要用到创建对象的各种设计模式来解决这个问题了，这章先讲工厂模式。

工厂模式
====
根据书上和各种百科的解释，还是先来一个官方版本，然后写写我的理解吧。

**官方解释：**
工厂是构造方法的抽象，抽象了创建具体对象的过程。工厂方法模式的实质是“定义一个创建对象的接口，但让实现这个接口的类来决定实例化哪个类。工厂方法让类的实例化推迟到子类中进行。

工厂模式分为三类：简单工厂模式、工厂方法模式和抽象工厂模式

**我的理解：**
至于为什么要叫工厂模式，就是因为这个模式将我们所需要的逻辑代码给封装到了一个函数里面，然后我们只需要传入相应的参数，就能够去获取需要的结果。这个过程就如同我们向工厂要东西一样简单。比如我们需要一台电脑，只需要告诉工厂电脑的屏幕尺寸是多大、系统是Win还是Linux、内存是多少G，而不用关心屏幕是怎么制作的，系统是怎么设置的，内存条是怎么做的，最重要的是最终这个电脑是怎么组装出来的我们也不关心，只关心最后能拿到一台我们所需的成品电脑就行了。

由于《JS高编》里这一部分只讲了简单工厂模式的实现，其他两种模式就先不说，更多的可以去看《JS设计模式》。

```
//创建一个简单函数，就当作一个类

//第一种方式是通过new Object()创建对象，最后返回它
function person(name,age){
    let o = new Object();
    o.name = name;
    o.age = age;
    o.myName = function(){
        console.log("我的名字是"+o.name)
    }
    return o;
}

let person1 = person("勾鑫宇",18);
let person2 = person("张三",23);

person1.myName();//输出“我的名字是勾鑫宇”
person2.age;//输出23

//第二种方式是通过字面量形式创建对象
function person(name,age){
    let o = {
        name: name;
        age: age;
        myName: function(){
            console.log("我的名字是"+o.name)
        }
    }
    return o;
}

```
上面的方法使用简单工厂模式封装了一个类，然后我们只需要传入名字和年龄的参数就行了。那么我们还可以添加稍微复杂一点的逻辑在这个工厂里面。

```
function person(name,age,country){
    let o = {
        name: name,
        age:age,
        myName:function(){
            console.log("我的名字是" + o.name)
        },
        country:country,
        type:''
    }
    if(age > 18 && country !== 'China'){
        o.type = "成年人";
        console.log('允许进入该网站')
    } 
    else if(age < 18 ){
        o.type = "未成年";
        console.log('不允许进入该网站')
    }
    else {
        o.type = "成年人";
        console.log('不允许进入该网站')
    }
    return o
}

let person1 = person("李四",20,"Japan");//输出“允许进入该网站”
let person2 = person("张三",17,"Japan");//输出“不允许进入该网站”
let person3 = person("王五",23,"China");//输出“不允许进入该网站”
```

优点
==
简单工厂模式的优点很明显，就是将我们的逻辑代码都封装好了，最终只暴露出一个公共的接口让我们传入参数即可使用。这种方式极大地减少了代码量，提高了代码的复用性。同时使得我们能够根据不同的条件去创造不同的工厂，最终获得不同的产品。

缺点
==
这种模式的缺点也是很明显的，因为我们复杂的逻辑都封装在了函数里，一旦某处出现了逻辑错误，就会影响所有使用这个工厂的人，可以说是牵一发而动全身。