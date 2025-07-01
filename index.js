const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// routes
const ocrRoutes = require('./routes/orcRoutes');
app.use('/', ocrRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});