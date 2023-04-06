const express = require('express');
const fs = require('fs');
const https = require('https');

const app = express();

// // 增加cors中间件
// const cors = require('cors');
// const corsOption = {
//   origin: ['http://woch.com:5173','http://localhost:5173', 'http://127.0.0.1:5173', 'https://woch-fe.vercel.app'],
//   credentials: true,
// }
// app.use('/api',cors(corsOption));

// 增加bodyParser中间件，用于解析req
const bodyParser = require('body-parser');
app.use('/api', bodyParser.json());

// 增加cookieParser中间件，用于解析cookie
const cookieParser = require('cookie-parser');
app.use('/api', cookieParser());


// 增加router中间件
const router = require('./router');
app.use('/api',router);

//启动http服务
app.listen(81, ()=> {
  console.log('启动express服务器,运行在http://127.0.0.1:81');
});

// //创建https服务
// const privateKey = fs.readFileSync('./private.pem', 'utf-8');
// const certificate = fs.readFileSync('./file.crt', 'utf-8');
// const credentials = {key: privateKey, cert: certificate};

// const httpsApp = https.createServer(credentials, app);
// httpsApp.listen(443, () => {
//   console.log('启动https服务，运行在https://127.0.0.1:443');
// });
