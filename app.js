require('dotenv').config()
const express = require('express')
const app = express()
const config = require('./config/config')
const userroute = require('./routes/user')
const orderroute = require('./routes/order')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
app.use(bodyParser.urlencoded({ extended: false }))
const producer = require('./messagequeues/producer')
const consumer = require('./messagequeues/consumer')
// parse application/json
app.use(bodyParser.json())

app.use('/',(req,res,next)=>{
    console.log("I am middleware")
    next()
})


app.use('/user',userroute)
app.use('/order',orderroute)

config().then(()=>{
    console.log("DB Connected")
    var server = app.listen(process.env.SERVICE_PORT || 8080,()=>{
        let hostname = server.address().address
        let port = server.address().port
        producer.produce.publishToQueue({"message":"msg here"})
        console.log(hostname,port)
    })
}).catch((err)=>{
    console.log("DB Connect Failed so couldn't start server also check internet connection",err)
})