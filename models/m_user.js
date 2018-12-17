//把c_user文件中的数据库操作部分提取出来
// 导入数据库配置模块
const connection = require('../config/db_config')

// 导出登录验证功能操作数据方法
exports.checkEmail = (email, callback) => {
    const sqlstr = 'SELECT * FROM `users` WHERE email=?';
    connection.query(sqlstr, email, (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}