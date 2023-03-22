const express = require('express');
const app = express();

const cors = require('cors');
const corsOption = {
  origin: 'http://localhost',
}
app.use('/api',cors(corsOption));

const router = require('./router');
app.use('/api',router);


app.listen(80, ()=> {
  console.log('启动express服务器,运行在http://127.0.0.1:80');
});