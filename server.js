const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {

    var duongDanFile = path.join(__dirname, './home.html');
    res.sendFile(duongDanFile);
})

app.listen(PORT, () => {

    console.log(`Server is running on PORT ${PORT}`);
})