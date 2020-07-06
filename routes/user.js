const express = require('express')
const router = express.Router()
const userService = require('../service/userService')

//save data to db
router.post('/insert',(req,res)=>{
    userobj=req.body
    userService.userServiceImpl.saveUser(userobj).then(result=>{
        res.status(200).send(result)
    }).catch(err=>{
        res.status(401).send(err)
    })
    })
    
//getting from db
router.get('/getUser',(req,res)=>{
    console.log("getting users....")
    
    userService.userServiceImpl.getUser().then(result=>{
        res.status(200).send(result)
    }).catch(err=>{
        res.status(401).send(err)
    })
    })



module.exports=router