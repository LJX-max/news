// 导包
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session')

// 配置包express包
const app = express();
// 配置静态资源和第三方资源（公开包）
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));
//配置express-art-template包
app.engine('html', require('express-art-template'));
//配置body-parser包 req多一个body属性
app.use(bodyParser.urlencoded({
    extended: false
}));
// 配置express-session req多一个session属性
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

// 挂载路由
app.use(router);

// 监听端口
app.listen(8080, () => {
    console.log('run it-----');
})