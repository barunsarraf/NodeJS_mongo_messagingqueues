var amqp = require('amqplib/callback_api');
require('dotenv').config()


amqp.connect(process.env.CONN_URL, function (err, conn) {

    try{
        if (err)
        {
            throw err
        }
        conn.createChannel(function (err, ch) {
            if(err)
            {
                throw err
            }
            ch.consume('order-message', function (msg) { //consumer 1 with queue on listening to 'order-message'
              console.log('.....');
              setTimeout(function(){
                console.log("Message:", msg.content.toString());
              },4000);
              },{ noAck: true }
            );
        })
    }
    catch(err)
    {
        console.log('Error occured at consumer side',err)
    }
});