# turtle-admin

## 项目介绍

一个基于react、antd的适合二次开发的后台管理系统。
webpack的配置使用的是 `trutle-webpack-tool` ，布局layout参考了 `ant-design-pro`。

#### 功能

- 登录 / 注销 （搭配localStorage进行权限验证，也可以使用sessionStorage）
- react 与 redux、redux-react-router、redux-saga使用 （redux、redux-saga的转化器 [redux-helps](https://github.com/yupeilin123/redux-helps))
- simple例子：计数器Counter

#### 使用

```
# 克隆项目
git clone https://github.com/yupeilin123/turtle-admin.git

# 安装依赖
npm install

# 启动服务
npm start

# 构建生成环境
npm run build

# eslint检测
npm run lint
```

## 参与贡献

非常欢迎你的贡献，你可以通过以下方式和我们一起共建：

- 通过 Issue bug 或进行咨询。
- 提交 Pull Request 改进代码。
