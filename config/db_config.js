// 导入MySQL包
var mysql = require('mysql');

// 配置数据库
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'news'
});

// 链接数据库
connection.connect();

//导出connection对象
module.exports = connection;