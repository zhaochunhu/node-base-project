# NODE-BASE-PROJECT Application


## 环境要求 

`Node LTS 6.10`

`MySQL 5.7`

`VS Express 2013 for Desktop`

`Python 2.7`

`Git`

```
npm install typescript  -g
npm install gulp -g
npm install node-gyp -g
npm install aglio -g
npm install aglio-theme-peperoncino -g
```

## 格式要求

1,换行符采用Unix/Linux编码
2,Tab采用4空格 

## 构建镜像
```bash
sh bin/build-docker-images.sh
```

## 生成文档
```bash
sh bin/docs.sh
```

### 代码检查

`sh ./bin/lint.sh` 

### 单元测试

`sh ./bin/test.sh`

### 代码编译

`sh ./bin/build.sh` or  `gulp build` 

### 代码运行

`sh ./bin/start.sh` or `npm start`
