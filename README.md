# vue-cardanro

> 本项目主要是用来测试数据，以后接口数据的使用，功能类的总结，后续可能会完成整套项目

## 接口

本项目即采用 **mock** 伪造数据，又采用以[node.js](https://github.com/sghuangrihuang/practiceProject/tree/master/node/20171121/ApiServer)为后台

* mock
  * `/search`：post请求，获取搜索商品数据
  * `/shoplist`：post请求，获取产品分类数据
  * `/homelist`：post请求，获取首页产品数据

* node
  * `/api/users/getUserInfo`：get请求，获取用户数据
  * `/api/users/editUserAvatar`: post请求，修改用户头像

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
