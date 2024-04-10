require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router/auth.router');
const conndb = require('./utils/db');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/', router);

conndb().then(() => {
    app.listen(3000, () => {
        console.log("Listenning.....");
    })
});