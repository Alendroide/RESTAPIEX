require('dotenv').config()
const app = require('./app');
app.listen(process.env.PORT,'localhost',()=>{
    console.log('Server running on port: ',process.env.PORT)
});