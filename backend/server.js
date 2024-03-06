const express = require('express');
const app = express();
const router = require('./router/auth.router')

app.get('/', (req, res) => {
    res.send("Hello");
})

app.use('/', router)

app.listen(3000, ()=>{
    console.log("Listenning.....");
})