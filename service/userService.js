const User = require('../model/userModel')
const { use } = require('../routes/user')


var methods={
    saveUser:(userObj)=>{
        const usobj = new User(userObj)
        return new Promise((resolve,reject)=>{
            usobj
        .save()
        .then(res=>{
            console.log('Data Saved')
            resolve(res)
        })
        .catch(err=>{
            console.log('error ocuured while saving')
            reject(err)
        })
        })
    },
    getUser:()=>{
        return new Promise((resolve,reject)=>{
            User
        .find({},(err,result)=>{
            if(result!=null)
            {
                resolve(result)
            }
            else
            {
                reject(err)
            }

        })
        })
    },
    injectOrder:(ordObject)=>{
        return new Promise((resolve,reject)=>{
            User.findById(ordObject.userid,(err,user)=>{
                if(err){
                    reject(err)
                }
                if(user!=null)
                {
                    itemList = []
                    for(i=0;i<ordObject.Items.length;i++)
                    {
                        itemList.push(ordObject.Items[i])
                    }
                    
                    neworder= {'orderId':ordObject._id,'items':itemList}
                    user.totalorders.push(neworder)
                    
                    console.log(user)
                    const u = new User(user)
                    console.log(user.totalorders.length)
                    u.save(user,function(err,res){
                        if(err)
                        {
                            reject(err)
                        }
                        resolve(res)
                    })
                }
            })
        })
    }
}
module.exports.userServiceImpl=methods