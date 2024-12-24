---
title: 'Kotlin隐藏Metadata和SourceDebugExtension注解'
---


## 什么是Metadata和SourceDebugExtension注解

Kotlin编译器在编译Kotlin源代码时会生成一些额外的元数据信息,以支持运行时反射等功能。这些元数据主要包含在两个注解中:

- `kotlin.Metadata` - 包含了类、函数、属性等Kotlin特有的元数据信息
- `kotlin.jvm.internal.SourceDebugExtension` - 包含了源码调试相关的信息

这些注解对于Kotlin运行时库来说是必需的,但在某些情况下我们可能希望隐藏这些信息,比如:

1. 减小生成的class文件大小
2. 避免暴露源代码相关的调试信息
3. 防止反编译时泄露过多的实现细节

## 隐藏SourceDebugExtension注解
在 Gradle 中，可以通过配置 `kotlinOptions` 来隐藏 `SourceDebugExtension` 注解  
修改`build.gradle.kts`文件
```kts {4}
tasks.withType<KotlinCompile> {
    kotlinOptions {
        jvmTarget = "1.8"
        freeCompilerArgs = listOf("-Xjvm-default=all", "-Xno-source-debug-extension")
    }
}

```

## 隐藏Metadata注解

::: warning 移除Metadata注解 必须保证你的项目没有使用Kotlin反射库中依赖Metadata注解的功能
:::

需要使用一个gradle插件
[https://github.com/izhangzhihao/unmeta](https://github.com/izhangzhihao/unmeta)

在`build.gradle.kts`文件中引入插件即可
```kts
plugins {
    kotlin("jvm")
    id("io.github.izhangzhihao.unmeta") version "1.0.3"
}

unmeta {
    enable.set(true)
}

jar {
    mustRunAfter("unmeta")
}
```

这个插件会在编译之后使用ASM修改class文件，移除`kotlin.Metadata`注解