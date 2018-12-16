// 导包
const express = require('express');
const router = require('./router');

// 配置包
const app = express();

// 挂载路由
app.use(router);

// 监听端口
app.listen(8080, () => {
    console.log('run it-----');
})