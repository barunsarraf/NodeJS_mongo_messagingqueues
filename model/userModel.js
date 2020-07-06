const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    company:{
        type:String
    },
    totalorders:{
      type:Array,
      default:[]
    }
  },
);
 
const User = mongoose.model('User', userSchema);
 
module.exports=User