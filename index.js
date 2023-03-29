const express = require('express');
const app = express();
// 增加cors中间件
const cors = require('cors');
const corsOption = {
  origin: '*',
}
app.use('/api',cors(corsOption));

// 增加bodyParser中间件，用于解析req
const bodyParser = require('body-parser');
app.use('/api', bodyParser.json());

// 增加router中间件
const router = require('./router');
app.use('/api',router);




app.listen(80, ()=> {
  console.log('启动express服务器,运行在http://127.0.0.1:80');
});