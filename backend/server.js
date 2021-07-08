require('dotenv').config()

const express = require('express')
const connect = require('./config/db')
const productRoutes= require('./routes/productRoutes')
connect()
const app=express()
app.use(express.json())
app.use('/api/products',productRoutes)
app.get('/',(req,res)=>{
    res.send('hellooooo')
})
/** app.get('/api/products',(req,res)=>{
    res.send({"aa":"bb","cc":"dd"})
})
**/
PORT=process.env.PORT || 4000
app.listen(PORT,() =>console.log(`sever is running on ${PORT}`))