// server/index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('../public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/../public' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
