// 路由模块

// 导包
const express = require('express');
const c_user = require('./controllers/c_user');

//实例化router
const router = express.Router();

// 配置路由找方法
router.get('/', c_user.showSignin);

// 导出
module.exports = router;