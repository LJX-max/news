// 导入m_user.js
const M_user = require('../models/m_user');

// 渲染登录页
exports.showSignin = (req, res) => {
    res.render('signin.html');
};

// 处理登录页请求
exports.handleSignin = (req, res) => {
    // 获取表单数据
    const body = req.body;
    // 登录验证功能,使用M_user中的方法
    M_user.checkEmail(body.email, (err, data) => {
        if (err) {
            // throw err;
            return res.send({
                code: 500,
                msg: '服务器错误！！！'
            });
        }
        // 如果邮箱不存在
        if (data.length == 0) {
            return res.send({
                code: 1,
                msg: '邮箱不存在！！！'
            });
        }
        // 如果邮箱存在验证密码
        if (data[0].password != body.password) {
            return res.send({
                code: 2,
                msg: '密码不正确！！！'
            });
        }
        // req.session保存正确的用户信息
        req.session.user = data[0];

        // 都正确
        res.send({
            code: 200,
            msg: '可以登录！！！'
        });
    });
};