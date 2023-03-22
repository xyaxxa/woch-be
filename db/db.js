const mysql = require('mysql');
const dbConfig = require('./config');
// 使用连接池避免开太多线程
const pool = mysql.createPool(dbConfig);

// 封装回调函数：处理query执行的结果并自定义返回Json结果
async function handleResult(res, result) {
  if(typeof result === 'undefined') {
    res.send({
      code: 201,
    })
  } else {
    res.json(result);
  }
}

//封装不带占位符的mysql查询
async function query(sql, callback) {
  pool.getConnection(function(err, connection) {
    if(err) console.log(err);
    console.log(connection);
    connection.query(sql, function(err,rows) {
      callback(err,rows);
      connection.release();
    });
  });
}

//封装带占位符的mysql查询
async function queryArgs(sql, args, callback) {
  pool.getConnection(function(err,connection) {
    connection.query(sql, args, function(err, rows) {
      callback(err, rows);
      connection.release();
    });
  });
}

module.exports = {
  query: query,
  queryArgs: queryArgs,
  handleResult: handleResult,
};