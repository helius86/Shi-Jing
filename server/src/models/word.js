const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true
  },
  word: {
    type: String,
    required: true
  },
  meaning: {
    type: String,
    required: true
  },
  context: {
    type: String,
    required: true
  }
}, {
  timestamps: true // 这会自动处理 createdAt 和 updatedAt
});

module.exports = mongoose.model('Word', wordSchema);