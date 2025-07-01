const Tesseract = require('tesseract.js');
const fs = require('fs');

exports.processImage = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'Không có ảnh được gửi lên.' });
    }

    try {
        const result = await Tesseract.recognize(req.file.path, 'eng+vie');
        fs.unlinkSync(req.file.path); // Xoá file sau khi xử lý
        res.setHeader('Content-Type', 'application/json');
        res.json({ text: result.data.text });
    } catch (err) {
        console.error('❌ OCR lỗi:', err);
        res.status(500).json({ error: 'Xử lý ảnh thất bại.' });
    }
};
