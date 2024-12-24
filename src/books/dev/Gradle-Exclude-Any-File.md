---
title: '使用Gradle打包时排除某些文件'
---

在使用Gradle打包时，有时想给项目打包为两个或多个不同版本的jar包，比如一个包含所有依赖的jar包，一个不包含依赖的jar包，这时就需要在打包时排除某些文件

## 注册一个Task
``` kts
tasks.register<Jar>("buildWithoutDependencies") {

}
```
## 依赖build任务
``` kts {2}
tasks.register<Jar>("buildWithoutDependencies") {
    dependsOn("build")
}
```
## 设置输出的Classifier
``` kts {3}
tasks.register<Jar>("buildWithoutDependencies") {
    dependsOn("build")
    archiveClassifier.set("without-dependencies")
}
```
## 读取原jar包
``` kts {4}
tasks.register<Jar>("buildWithoutDependencies") {
    dependsOn("build")
    archiveClassifier.set("without-dependencies")
    from(zipTree(tasks.jar.get().archiveFile)) {
    }
}
```

## 排除dependdencies包
``` kts {5}
tasks.register<Jar>("buildWithoutDependencies") {
    dependsOn("build")
    archiveClassifier.set("without-dependencies")
    from(zipTree(tasks.jar.get().archiveFile)) {
        exclude(project.group.toString().replace(".", "/").plus("/dependencies/**"))
    }
}
```

完整代码为
``` kts
tasks.register<Jar>("buildWithoutDependencies") {
    dependsOn("build")
    archiveClassifier.set("without-dependencies")
    from(zipTree(tasks.jar.get().archiveFile)) {
        exclude(project.group.toString().replace(".", "/").plus("/dependencies/**"))
    }
}
```

这样执行`gradle buildWithoutDependencies`时，会生成一个不包含依赖的jar包和一个包含依赖的jar包  
