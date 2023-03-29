const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/woch').catch(err => {
  console.log('mongodb连接错误');
});

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
  tags: Array,
});

const Models = {
  User: mongoose.model('Project', projectSchema),
};

module.exports = Models;