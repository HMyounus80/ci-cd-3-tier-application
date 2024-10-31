const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from Backend!" });
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
