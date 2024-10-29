# 反应 \(动作组\)

## 常规

```yaml
actions:
 - 'tell: Hello, %player_name%'
```

```yaml
actions: 'tell: Hello, %player_name%'
```

## 三元动作组

```yaml
    actions:
      all:
        - condition: 'js: utils.chance(0.1)'
          actions:
            - 'tell: Prize 1'
            - 'return'
        - condition: 'js: utils.chance(0.5)'
          actions:
            - 'tell: Prize 2'
            - 'return'
        - condition: ''
          actions:
            - 'tell: Prize 3'
```

## 套娃式动作组
> by @Rubenicos
```yaml
    actions:
      all:
        - 'tell: &bNormal Action'
        # [ Conditional Action ]
        # Allow more conditional actions inside infinitely
        - condition: 'perm *permission.123'
          actions:
            - 'tell: &aYES'
            - condition: 'perm *other.permission'
              actions:
                - 'tell: &aYEP'
              deny:
                - 'tell: &cNOPE'
          deny:
            - 'tell: &cNO'
```

## 注意

* 动作做的执行结果取决于是否有 return 动作返回，若有返回则为 false

