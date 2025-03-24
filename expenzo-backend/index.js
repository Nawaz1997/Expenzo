const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;

const { DATABASE } = require('./config/keys');

mongoose
    .connect(DATABASE)
    .then(() => {
        console.log('MongoDB Connected.......');
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(PORT, () => {
    console.log(`Server Started at PORT : ${PORT}`);
});
