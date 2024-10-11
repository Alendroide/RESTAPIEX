const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use('/img',express.static(path.join(__dirname,'public')))
const routes = path.join(__dirname,'routers');

fs.readdirSync(routes).forEach((file)=>{
    const router = require(path.join(routes,file));
    app.use('/api',router);
})

app.use((req,res)=>{
    res.status(404).json({
        message : '404 - Esta URL no existe'
    })
})

module.exports = app;