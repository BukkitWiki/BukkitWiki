---
order: 4
---
# API

## JavaDocs
[https://www.mythiccraft.io/javadocs/mythic/](https://www.mythiccraft.io/javadocs/mythic/)

## 仓库
### Maven
```xml
<repository>
    <id>nexus</id>
    <name>Lumine Releases</name>
    <url>https://mvn.lumine.io/repository/maven-public/</url>
</repository>
```
### Gradle(Groovy)
```groovy
repositories {
    // ...
    mavenCentral()
    maven { url 'https://mvn.lumine.io/repository/maven-public/' }
}
```
### Gradle(Kotlin)
```kotlin
repositories {
    // ...
    mavenCentral()
    maven(url = "https://mvn.lumine.io/repository/maven-public/")
}
```

## 引入依赖
### Maven
```xml
<dependency>
    <groupId>io.lumine</groupId>
    <artifactId>Mythic-Dist</artifactId>
    <version>5.6.1</version>  
    <scope>provided</scope>
</dependency>
```
### Gradle(Groovy)
```groovy
dependencies {
    //...
    compileOnly 'io.lumine:Mythic-Dist:5.6.1'
}
```
### Gradle(Kotlin)
```kotlin
dependencies {
    // ...
    compileOnly("io.lumine:Mythic-Dist:5.6.1")
}
```

## 示例

MythicMobs API 包含大量事件和工具类，帮助开发者使用怪物、物品和技能系统

这里有一些帮助入门的示例

[MythicMobs API Examples Repo](https://github.com/xikage/MythicMobs-API-Examples)

### 生成怪物示例
```java
MythicMob mob = MythicBukkit.inst().getMobManager().getMythicMob("SkeletalKnight").orElse(null);
Location spawnLocation = player.getLocation();
if(mob != null){
    // spawns mob            
    ActiveMob knight = mob.spawn(BukkitAdapter.adapt(spawnLocation),1);
    
    // get mob as bukkit entity
    Entity entity = knight.getEntity().getBukkitEntity();
}
```

### 检查 Bukkit 实体是否是 MM 怪物
```java
Entity bukkitEntity = ...;
boolean isMythicMob = MythicBukkit.inst().getMobManager().isMythicMob(bukkitEntity);
if(isMythicMob){
    // ...             
}
```

### 将 Bukkit 实体转换为 MM 的 ActiveMob 实例
```java
Entity bukkitEntity = ...;
Optional<ActiveMob> optActiveMob = MythicBukkit.inst().getMobManager().getActiveMob(bukkitEntity.getUniqueId());
optActiveMob.ifPresent(activeMob -> {
    //...
}).orElse(() -> /* ... */);
```

### 使用名字获取 ActiveMob 实例集合
```java
Collection<ActiveMob> activeMobs = MythicBukkit.inst().getMobManager().getActiveMobs(am -> am.getMobType().equals("SkeletalKnight"));
```