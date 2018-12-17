// 文章相关的数据库操作
// 导入数据库配置模块
const connection = require('../config/db_config')

// 查询所有文章数据
exports.findAllTopic = (callback) => {
    const sqlstr = 'SELECT * FROM `topics`';
    connection.query(sqlstr, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    });
};