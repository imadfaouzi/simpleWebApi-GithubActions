const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, welcome to our simple Node.js API!');
});

// add a new route to return information about the app
// say that the app is for training to work with github actions
app.get('/about', (req, res) => {
    res.send('This is a simple Node.js API for training to work with GitHub Actions.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
