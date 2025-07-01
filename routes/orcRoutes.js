const express = require('express');
const multer = require('multer');
const router = express.Router();
const ocrController = require('../controllers/ocrController');

// cấu hình multer
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('image'), ocrController.processImage);

module.exports = router;
