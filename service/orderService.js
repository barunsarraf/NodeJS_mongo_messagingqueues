const Order = require('../model/ordersModel')


var methods={
    saveOrder:(orderObj)=>{
        const orObj = new Order(orderObj)
        return new Promise((resolve,reject)=>{
            orObj
        .save()
        .then(res=>{
            console.log('Order Saved')
            resolve(res)
        })
        .catch(err=>{
            console.log('error ocuured while order saving')
            reject(err)
        })
        })
    },
    getOrder:()=>{
        return new Promise((resolve,reject)=>{
            Order
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
    }
}
module.exports.orderServiceImpl=methods