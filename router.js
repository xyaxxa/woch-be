const express = require('express');
const router = express.Router();

const db = require('./db-mongoose/db');

router.get('/projects', (req, res) => {
  console.log('获取项目信息')
  db.User.find({}).then((result) => {
    res.json(result);
  }).catch((err) => {
    console.log(err);
  })
});

router.post('/verify', (req, res) => {
  console.log('验证身份');
  if(req.body.password === '130625741') {
    res.json({
      success: true,
    });
  } else {
    res.json({
      success: false,
    });
  }
})

module.exports = router;