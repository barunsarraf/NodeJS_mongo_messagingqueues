const  amqp = require('amqplib/callback_api')
require('dotenv').config()


let ch = null;
amqp.connect(process.env.CONN_URL, function (err, conn) {
    if (err)
    {
        throw err
    }
    else
    {
        conn.createChannel(function (err, channel) {
            if(err)
            {
                throw err
            }
            else
            {
                ch = channel;
            }
         });
    }
});

var method={
    publishToQueue:async (data) => {
        if (ch!=null)
        {
            ch.sendToQueue('order-message',new Buffer.from(JSON.stringify(data)))
        }
        else
        {
            console.log('cannot send data to queue')
        }
    }
}

process.on('exit', (code) => {
   ch.close();
   console.log(`Closing rabbitmq channel`);
});

module.exports.produce=method