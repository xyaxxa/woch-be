const express = require('express');
const router = express.Router();

const db = require('./db-mongoose/db');

router.get('/projects', (req, res) => {
  console.log('有请求来了')
  db.User.find({}).then((result) => {
    res.json(result);
  }).catch((err) => {
    console.log(err);
  })
});

module.exports = router;