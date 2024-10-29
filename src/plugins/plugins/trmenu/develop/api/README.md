---
dir: 
  link: true
---

# API

Maven:
```xml
<repositories>
    <repository>
        <id>roselle-public</id>
        <url>https://repo.mcage.cn/repository/maven-public/</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>me.arasple.mc.trmenu</groupId>
        <artifactId>trmenu</artifactId>
        <version>{LATEST-VERSION}</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

Gradle Kotlin DSL
```kotlin
repositories {
    maven("https://repo.mcage.cn/repository/maven-public/")
}
dependencies {
    compileOnly("me.arasple.mc.trmenu:trmenu:{LATEST-VERSION}")

    // 子模块
    implementation("me.arasple.mc.trmenu:trmenu-{module}:{LATEST-VERSION}")
}

```