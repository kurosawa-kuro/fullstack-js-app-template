const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
