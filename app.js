const express = require('express');
const mongoose = require('mongoose');
const itemController = require('./routes/routes');

const app = express();
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true
}).then(() => console.log('DB CONNECTION SUCCESSFUL'));


app.use('/api/v1', itemController); // mounting

app.listen(3001, (req, res) => {
    console.log('Listen to events...')
})
