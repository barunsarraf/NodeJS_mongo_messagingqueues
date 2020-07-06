require('dotenv').config()
const mongoose = require('mongoose')

const connectDb = () => {
  return new Promise((resolve,reject)=>{
    mongoose.connect(process.env.CURRENT_ENV=='DEVELOPMENT'?process.env.DATABASE_URL_DEV:process.env.DATABASE_URL_PROD,{useNewUrlParser: true, useUnifiedTopology: true})
    mongoose.connection.once('open',()=>{resolve()})
    .on('error',(err)=>{reject(err)})

  })
  };

  
module.exports=connectDb