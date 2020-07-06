const express = require('express')
const router = express.Router()
const orderService = require('../service/orderService')
const userService = require('../service/userService')

//save data to db
router.post('/insert',(req,res)=>{
    orderobj=req.body
    orderService.orderServiceImpl.saveOrder(orderobj).then(result=>{
        userService.userServiceImpl.injectOrder(result).then((result2)=>{
            res.send(result)
        })
    }).catch(err=>{
        res.status(401).send(err)
    })
    })
    
//getting from db
router.get('/getOrder',(req,res)=>{
    console.log("getting Order....")
    
    orderService.orderServiceImpl.getOrder().then(result=>{
        res.status(200).send(result)
    }).catch(err=>{
        res.status(401).send(err)
    })
    })



module.exports=router