const express = require('express');
const router = express.Router();

const db = require('./db-mongoose/db');

const config = require('./config');

router.get('/projects', (req, res) => {
  console.log('获取项目信息')
  db.Project.find({}).then((result) => {
    res.json(result);
  }).catch((err) => {
    console.log(err);
  })
});

router.post('/verify', (req, res) => {
  console.log('验证身份');
  if(req.body.password === config.adminPassword) {
    res.cookie('token','yourtoken',{
      httpOnly: true,
    });
    res.json({
      success: true,
    });
  } else {
    res.json({
      success: false,
    });
  }
})

router.post('/admin/addproject', (req,res)=> {
  console.log(req.cookies);
  console.log(req.body);
  if(req.cookies.token) {
    db.Project.create(req.body.project).then(() => {
      res.json({
        success: true,
      })
    }).catch((err) => {
      console.log(err);
      res.json(({
        success: false,
      }))
    })
  } else {
    res.json({
      success: false,
    })
  }
})

module.exports = router;