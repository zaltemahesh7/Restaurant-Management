require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router/auth.router');
const adminRoute = require('./router/admin-router')
const conndb = require('./utils/db');
const cors = require('cors');

const PORT = 3000;

app.use(cors());

app.use(express.json());
app.use('/', router);
app.use('/admin', adminRoute)

conndb().then(() => {
    app.listen(PORT, () => {
        console.log("Listenning.....", PORT);
    })
});