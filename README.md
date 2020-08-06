# 自用的项目初始化工具

基于vue和typescript的项目初始化

使用组件：vue-router、vuex、element-ui、vue-property-decorator、axios...

## 项目目录
 - src
   * assets-------------静态资源存放目录
   * axios---------------封装axios
   * components-----公共组件
     + layout-------页面布局组件
    * router-------------路由组件
    * store--------------vuex
    * utils---------------工具类
    * views-------------项目文件
- .env.xxx----------------环境变量文件
- index.d.ts--------------ts声明文件

## 使用方法

```typescript
cnpm i
npm run serve //本地启动命令
npm run test  //测试环境打包命令
npm run build  //生产环境打包命令
```
