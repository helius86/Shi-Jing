const Word = require('../models/word');

const wordController = {
  // 获取所有单词
  getAllWords: async (req, res) => {
    try {
      console.log('Getting all words...');
      const words = await Word.find().sort({ createdAt: -1 });
      console.log('Found words:', words);
      res.json(words);
    } catch (error) {
      console.error('Error getting words:', error);
      res.status(500).json({ message: error.message });
    }
  },

  // 创建新单词
  createWord: async (req, res) => {
    try {
      console.log('Received word data:', req.body);
      const newWord = new Word(req.body);
      const savedWord = await newWord.save();
      console.log('Saved word:', savedWord);
      res.status(201).json(savedWord);
    } catch (error) {
      console.error('Error creating word:', error);
      res.status(400).json({ message: error.message });
    }
  },

  // 删除单词
  deleteWord: async (req, res) => {
    try {
      console.log('Deleting word with ID:', req.params.id);
      const word = await Word.findByIdAndDelete(req.params.id);
      if (!word) {
        console.log('Word not found');
        return res.status(404).json({ message: 'Word not found' });
      }
      console.log('Deleted word:', word);
      res.json({ message: 'Word deleted' });
    } catch (error) {
      console.error('Error deleting word:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = wordController;