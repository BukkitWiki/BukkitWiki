---
title: '给你的插件接入HikariCP连接池 —— HikariCP使用教程'
---

# 什么是JDBC？  

    在Java开发中，对数据库的操作有一套标准接口通常被称为JDBC，JDBC完全名称叫做 ==Java DataBase Connectivity==（Java语言连接数据库）  
## 为什么会出现JDBC？  

    因为市面上不尽其数的数据库产品，而每个数据库的底层实现原理又各有不同，在Java中为了对操作统一管理就开发了一套标准接口。  
    
关于JDBC的更多内容请查阅我的JDBC教程  
# 什么是HikariCP？  

想要搞清楚什么是HikariCP，首先需要先了解数据库连接池是什么？  
## 什么是数据库连接池？  

在计算机中一个程序想要连接数据库时需要首先开启一个连接，而创建连接的过程是一个耗时过程（相对耗时的过程），数据库连接池的出现就是为了解决创建连接耗时的问题。在连接池中存在预设的很多个连接，当程序中某个方法需要连接数据库时直接去连接池中申请一个已经创建的连接即可。  
## 连接池的主要功能  

- 数据库连接复用：重复使用现有的数据库长连接，可以避免连接频繁建立、关闭的开销。  
- 统一的连接管理：释放空闲时间超过最大空闲时间的数据库连接，避免因为没有释放数据库连接而引起的数据库连接泄露。  
## HikariCP  

HikariCP 是一个高性能的 JDBC 连接池，号称性能最好的后起之秀，是一个基于BoneCP做了不少的改进和优化的高性能JDBC连接池。  
并且HikariCP非常轻量仅仅只有130kb，因此在Bukkit领域被大范围应用。  
# 开始使用  
## 引入依赖  
本教程使用的HikariCP的版本是**4.0.3**
### Maven  
在项目的pom.xml的dependencies中加入以下内容:  
```xml  
    <dependency>  
       <groupId>com.zaxxer</groupId>  
       <artifactId>HikariCP</artifactId>  
       <version>4.0.3</version>  
    </dependency>  
```  
  
### Gradle kts  
在项目的build.gradle.kts的dependencies中加入以下内容：  
```kts  
implementation("com.zaxxer:HikariCP:4.0.3")  
```  
  
### 下载Jar  
点击以下链接，下载`HikariCP-4.0.3.jar`即可：  
- [Maven中央库](https://repo1.maven.org/maven2/com/zaxxer/HikariCP/4.0.3/)  
  
# 编写代码  
  
工具类（核心）  
```java  
import com.zaxxer.hikari.HikariConfig;  
import com.zaxxer.hikari.HikariDataSource;  
import org.bukkit.configuration.ConfigurationSection;  
import org.bukkit.configuration.file.FileConfiguration;  
  
import java.sql.Connection;  
import java.sql.ResultSet;  
import java.sql.SQLException;  
import java.sql.Statement;  
  
/**  
 * Mysql工具类  
 * @author dakuo  
 */  
public class MysqlUtil {  
  
    private HikariDataSource dataSource;  
  
    private static final MysqlUtil instance = new MysqlUtil();  
    private MysqlUtil(){  
  
    }  
  
    /**  
     * 单例模式工具类  
     * @return 唯一实例  
     */  
    public synchronized static MysqlUtil getInstance() {  
        return instance;  
    }  
  
    /**  
     * 初始化方法  
     */  
    public void init(){  
        HikariCPExample plugin = HikariCPExample.getPlugin(HikariCPExample.class);  
        FileConfiguration config = plugin.getConfig();  
        ConfigurationSection databaseSection = config.getConfigurationSection("database");  
        // 连接数据库的基础配置  
        String host = databaseSection.getString("host", "localhost");  
        int port = databaseSection.getInt("port", 3306);  
        String username = databaseSection.getString("username", "root");  
        String password = databaseSection.getString("password", "");  
        String database = databaseSection.getString("database", "minecraft");  
  
        // 连接池参数  
        ConfigurationSection hikaricpSection = databaseSection.getConfigurationSection("hikaricp");  
        long connectionTimeout = hikaricpSection.getLong("connectionTimeout",30000L);  
        long idleTimeout = hikaricpSection.getLong("idleTimeout",600000L);  
        long maxLifetime = hikaricpSection.getLong("maxLifetime",1800000L);  
        String connectionTestQuery = hikaricpSection.getString("connectionTestQuery","SELECT 1");  
        int minimumIdle = hikaricpSection.getInt("minimumIdle",10);  
        int maximumPoolSize = hikaricpSection.getInt("maximumPoolSize",30);  
  
        HikariConfig hikariConfig = new HikariConfig();  
        hikariConfig.setConnectionTimeout(connectionTimeout);  
        hikariConfig.setIdleTimeout(idleTimeout);  
        hikariConfig.setMaxLifetime(maxLifetime);  
        hikariConfig.setConnectionTestQuery(connectionTestQuery);  
        hikariConfig.setMinimumIdle(minimumIdle);  
        hikariConfig.setMaximumPoolSize(maximumPoolSize);  
        // 设置驱动类  
        hikariConfig.setDriverClassName("com.mysql.cj.jdbc.Driver");  
        // 设置jdbc URL  
        hikariConfig.setJdbcUrl("jdbc:mysql://" + host + ":" + port + "/" + database+"?useUnicode=true&characterEncoding=utf8&useSSL=false");  
        hikariConfig.setUsername(username);  
        hikariConfig.setPassword(password);  
  
        dataSource = new HikariDataSource(hikariConfig);  
    }  
  
    /**  
     * 测试方法  
     * 注意：此处仅作简单示例 在实战中请使用 connection.prepareStatement(); 对sql语句进行预处理 以免造成sql注入  
     * @return helloHikari  
     */  
    public String test(){  
        try {  
            Connection connection = dataSource.getConnection(); // 此处拿到的Connection实现为 com.zaxxer.hikari.pool.ProxyConnection  
            Statement statement = connection.createStatement();  
            ResultSet rs = statement.executeQuery("select 'helloHikari' as ret");  
            rs.next(); //数据库结果集 表结果 要滚动行  
            String ret =  rs.getString("ret");  
            // statement.close(); 与传统JDBC操作不同 此处不需要手动关闭 statement 在ProxyConnection#close方法的第一行中执行了关闭所有statement的操作  
            connection.close(); // 并非真正的关闭连接而是通知连接池请对这个连接进行回收  
            return ret;  
        } catch (SQLException e) {  
            throw new RuntimeException(e);  
        }  
    }  
  
}  
```  
  
测试业务类  
``` java  
import java.util.logging.Logger;  
  
/**  
 * 测试业务类  
 * @author dakuo  
 */  
public class Service {  
  
    private final HikariCPExample plugin = HikariCPExample.getPlugin(HikariCPExample.class);  
  
    public void sayHello() {  
        String test = MysqlUtil.getInstance().test();  
  
        Logger logger = plugin.getLogger();  
        logger.info(test);  
  
    }  
}  
```  
  
主类  
```java  
import org.bukkit.plugin.java.JavaPlugin;  
  
public final class HikariCPExample extends JavaPlugin {  
  
    @Override  
    public void onEnable() {  
        saveDefaultConfig();  
  
        // 最好是在插件启动时初始化 避免启动时没有初始化 在使用时疯狂报错的情况  
        MysqlUtil.getInstance().init();  
        Service service = new Service();  
        service.sayHello();  
        getLogger().info("HikariCP Example Enabled");  
  
    }  
  
    @Override  
    public void onDisable() {  
        getLogger().info("HikariCP Example Disabled");  
    }  
}  
  
```  

配置文件
``` yaml  
  database:  
  # 数据库ip  
  host: localhost  
  # 数据库端口  
  port: 3306  
  # 用户名  
  username: root  
  # 密码  
  password: 123456  
  # 数据库名  
  database: minecraft  
  # 连接池配置  
  hikaricp:  
    # 连接超时时长  
    connectionTimeout: 30000  
    # 一个连接在池里闲置多久时会被抛弃  
    idleTimeout: 600000  
    # 池中连接最长生命周期，当一个连接存活了足够久，HikariCP 将会在它空闲时把它抛弃  
    maxLifetime: 1800000  
    # 用来检查连接活性的 sql，要求是一个查询语句，常用select ‘x’  
    connectionTestQuery: 'SELECT 1'  
    # 池中维护的最小空闲连接数，池中至少要有多少空闲连接  
    minimumIdle: 10  
    # 池中最多容纳多少连接包括空闲的和在用的  
    maximumPoolSize: 30
```  
# 测试  

![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/启动成功.png)

# 后言  


本教程涉及到的源码 [https://github.com/mcdd-dev/HIkariCPExample](https://github.com/mcdd-dev/HIkariCPExample)
