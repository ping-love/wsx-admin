
## 简介
点一点商城-运营后台管理系统

## 命令
```bash
# 启动
npm run serve

# 打包
npm run build

# 静态资源分析
npm run report

# 代码格式检查并自动修复
npm run lint
```

## 结构

  ```bash
  ├── public                     // html模板
  ├── src                        // 源代码
  │   ├── api                    // 各模块请求接口函数
  │   ├── assets                 // 图片、icons、styles等静态资源
  │   ├── components             // 全局公共组件
  │   ├── directive              // 公共自定义指令
  │   ├── filters                // 公共filter
  │   │   ├── transform.js       // 字段转中文函数
  │   ├── utils                  // 公用方法目录
  │   │   ├── request.js         // axios请求统一配置
  │   │   ├── routerGuards.js    // 全局路由拦截
  │   │   ├── tools.js           // 公共工具方法
  │   │   ├── storage.js         // localStorage存储封装
  │   │   ├── validate.js        // 公共表单校验方法
  │   ├── views                  // 所有页面代码目录
  ├── vue.config.js              // vue-cli配置
  ```

## 浏览器支持
IE 11
Edge
Chrome
Firefox
Safari
