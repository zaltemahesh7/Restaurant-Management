const express = require('express');
const app = express();
const router = require('./router/auth.router')
const conndb = require('./utils/db')

app.get('/', (req, res) => {
    res.send("Hello");
})

app.use('/', router)

conndb().then(() => {
    app.listen(3000, () => {
        console.log("Listenning.....");
    })
})