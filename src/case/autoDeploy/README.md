

# 自动化部署

 本文主要介绍通过gulp及gulp-sftp插件进行sftp自动化部署代码到服务器

## 全局安装gulp

 
  

```bash
  npm i gulp -g
  ```

## 项目中安装gulp

 
  

```bash
  npm i gulp --save
  ```

## 安装gulp-sftp及文件夹清理插件 del

 
  

```bash
  npm i gulp-sftp del --save
  ```

## 编写sftpConfig.js, 至于项目根目录

```javascript
module.exports = {
    test: { //部署到测试服务器上
        remotePath: '/www/test/appName/', // 仅仅是结尾多了一个”/“，部署到服务器的路径
        host: '192.168.x.xxx', //ip地址
        user: 'root', //帐号
        pass: "xxxxxxx", //密码
        port: 22 //端口
    },
    dev: { //部署开发服务器上
        remotePath: '/www/dev/appName', // 仅仅是结尾多了一个”/“，部署到服务器的路径
        host: '192.168.x.xxx', //ip地址
        user: 'root', //帐号
        pass: "xxxxxxx", //密码
        port: 22 //端口
    },
    publicPath: '/dist/' //程序编译好路径
}
```

## 编写gulpfile.js 至于根目录

```javascript
const gulp = require('gulp');
const del = require('del');
const ftp = require('gulp-sftp');

// 是上传地址配置，可以在.gitignore中忽略此文件上传，为了安全本地拥有就可以了
const config = require('./sftpConfig');

/**
 * 清除测试目录文件
 */
gulp.task('clean-test', ['upload-test'], function(callback) {
    console.log('

## 已经成功部署到测试服务器上')

    console.log('

## 清除原来编译的代码')

    del(['.' + config.publicPath], callback)
});

/**
 * 清除开发目录文件
 */
gulp.task('clean-dev', ['upload-dev'], function(callback) {
    console.log('

## 已经成功部署到开发服务器上')

    console.log('

## 清除原来编译的代码')

    del(['.' + config.publicPath], callback)
});

/**
 * 自动部署到到测试服务器
 */
gulp.task('upload-test', function(callback) {
    console.log('

## 正在部署到测试服务器上')

    var test = config.test;
    gulp.src('.' + config.publicPath + '**')
        .pipe(ftp(Object.assign(test, {
            callback
        })))
});

/**
 * 自动部署到到开发服务器
 */
gulp.task('upload-dev', function(callback) {
    console.log('

## 正在部署到开发服务器上')

    var dev = config.dev;
    gulp.src('.' + config.publicPath + '**')
        .pipe(ftp(Object.assign(dev, {
            callback
        })))
});

/**
 * 发布至开发服务器
 */
gulp.task('deploy-dev', ['upload-dev', 'clean-dev'])

/**
 * 发布至测试服务器
 */
gulp.task('deploy-test', ['upload-test', 'clean-test'])
```
## 发布

```bash
# 发布至开发服务器
gulp deploy-dev
```

```bash
# 发布至测试服务器
gulp deploy-test
```

## 与vue脚手架配合
#### 修改根目录下的package.json,加入下面的配置
```json
 "scripts": {
    "deploy": "node build/build.js && gulp deploy-test", 
    "deploy-dev": "node build/build.js && gulp deploy-dev"
  },
```  
#### 构建及发布
```bash
npm run deploy #默认发布至测试环境
```
```bash
npm run deploy-dev #发布至开发环境
```


