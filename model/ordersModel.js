const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
    },
    Items:{
        type:Array
    }
  },
);
 
const Order = mongoose.model('Order', orderSchema);
 
module.exports=Order