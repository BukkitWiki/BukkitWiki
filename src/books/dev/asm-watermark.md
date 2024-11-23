---
title: '利用ASM给你的Class文件添加水印'
---

在开发过程中可能会需要在分发的jar包中添加一些信息，可能目的是标注版权信息或是防止分发泄漏，我们并不想让其他人随意修改这些内容，此时就需要在jar中隐藏一些信息方便泄露后溯源分发者  
本文将介绍如何使用ASM实现在Class文件中添加自定义水印的功能

## 什么是ASM？
来自OSCHINA的介绍：  
::: info ASM 是一个通用的 Java 字节码操作和分析框架。 它可以用于修改现有类或直接以二进制形式动态生成类。 ASM 提供了一些常见的字节码转换和分析算法，可以从中构建自定义复杂转换和代码分析工具。 ASM 提供与其他 Java 字节码框架类似的功能，但专注于性能。 因为它的设计和实现尽可能小而且快，所以它非常适合在动态系统中使用（但当然也可以以静态方式使用，例如在编译器中）
:::

## 什么是自定义属性？
在Java的`.class`文件中，有一个结构被称为**属性表(Attribute Table)**，其中存储了编译器生成的元数据  
例如：
- `SourceFile`: 用于记录生成这个Class文件的源码文件名称
- `ConstantValue`: 字段的常量值

## 实操

### 准备环境
首先引入ASM依赖
```kts
implementation("org.ow2.asm:asm:9.7.1")
```

### 实现自定义属性类

```kotlin
import org.objectweb.asm.Attribute
import org.objectweb.asm.ByteVector
import org.objectweb.asm.ClassReader
import org.objectweb.asm.ClassWriter

class MyHiddenAttribute(name: String, private val data: ByteArray) : Attribute(name) {

    fun getData(): ByteArray = data

    override fun read(
        cr: ClassReader,
        off: Int,
        len: Int,
        buf: CharArray?,
        codeOff: Int,
        labels: Array<org.objectweb.asm.Label>?
    ): Attribute {
        val data = ByteArray(len)
        System.arraycopy(cr.b, off, data, 0, len)
        return MyHiddenAttribute(type, data)
    }

    override fun write(
        cw: ClassWriter,
        code: ByteArray?,
        len: Int,
        maxStack: Int,
        maxLocals: Int
    ): ByteVector {
        val bv = ByteVector()
        bv.putByteArray(data, 0, data.size)
        return bv
    }
}

```

### 在`.class`文件中插入自定义属性
使用ASM的`ClassWriter`操作`.class`文件,添加`MyHiddenAttribute`属性

```kotlin
import org.objectweb.asm.*

fun addCustomAttributeToClass(classBytes: ByteArray, attributeName: String, attributeData: String): ByteArray {
    val cr = ClassReader(classBytes)
    val cw = ClassWriter(0)

    val customAttribute = MyHiddenAttribute(attributeName, attributeData.toByteArray())

    cr.accept(object : ClassVisitor(Opcodes.ASM9, cw) {
        override fun visitEnd() {
            // 插入自定义属性
            super.visitAttribute(customAttribute)
            super.visitEnd()
        }
    }, 0)

    return cw.toByteArray()
}

```

### 从`.class`文件中读取自定义属性
```kotlin
val cr = ClassReader(input) // Class文件的输入流
val cw = ClassWriter(0)

cr.accept(object : ClassVisitor(Opcodes.ASM9, cw) {
    override fun visitAttribute(attr: Attribute?) {
        if (attr?.type == "HiddenAttribute") {
            // 尝试直接获取自定义属性的数据
            try {
                // 通过反射获取私有字段 cachedContent
                val cachedContentField = attr::class.java.getDeclaredField("cachedContent")
                cachedContentField.isAccessible = true
                val cachedContent = cachedContentField.get(attr)

                // 通过反射获取 cachedContent 的 data 字段
                val dataField = cachedContent::class.java.getDeclaredField("data")
                dataField.isAccessible = true
                val byteArray = dataField.get(cachedContent) as ByteArray

                // 转换为字符串并输出
                val hiddenMessage = String(byteArray)
                println(hiddenMessage)
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }
}, ClassReader.SKIP_CODE)
```


## 后言

这只是一个简单的示例，确实是一个可行的加水印方案，希望有能力者能开发基于此开发一个通用的加水印套件

本文代码已经开源 开源地址: [https://github.com/CoderKuo/AsmWaterMark](https://github.com/CoderKuo/AsmWaterMark)