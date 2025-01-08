const express = require('express');
const router = express.Router();
const wordController = require('../controllers/wordController');

// GET /api/words
router.get('/', wordController.getAllWords);

// POST /api/words
router.post('/', wordController.createWord);

// DELETE /api/words/:id
router.delete('/:id', wordController.deleteWord);

module.exports = router;