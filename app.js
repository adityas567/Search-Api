const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=5050;
const studentRoutes=require('./routes/students');
var cors = require('cors')
app.use(bodyParser.json());
app.use('/students',studentRoutes);
app.use(cors());
app.get('/',(req,res)=>
{
    res.send('Welcome to search API');
})



app.listen(port,()=>console.log(`your app started running on http:/localhost:${port}`));