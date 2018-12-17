// 路由模块

// 导包
const express = require('express');
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');

//实例化router
const router = express.Router();

// 配置路由找方法
router
    //渲染登录页请求
    .get('/signin', c_user.showSignin)
    // 提交表单信息请求
    .post('/signin', c_user.handleSignin)
    //渲染文章列表页
    .get('/', c_topic.showTopicList);

// 导出
module.exports = router;