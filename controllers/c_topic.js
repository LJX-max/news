// 所有文章相关的方法实现
// 导入m_topic.js
const M_topic = require('../models/m_topic');

// 渲染文章列表
exports.showTopicList = (req, res) => {
    // 使用回调函数接收数据
    M_topic.findAllTopic((err, data) => {
        // 判读返回的数据
        if (err) {
            return res.send({
                code: 500,
                msg: '服务器错误！！！'
            });
        };
        // 视图需要数据
        res.render('index.html', {
            topics: data,
            user: req.session.user
        });
    });
};