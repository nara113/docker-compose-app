const express=require('express');
const redis=require('redis');

const client=redis.createClient({
    host: "redis-server",
    port: 6379
})

const app=express();
app.listen(8080);

client.set("number", 0);

app.get('/',(req,res)=>{
    client.get("number",(err,num)=>{
        client.set("number", parseInt(num) + 1);
        res.send("number : " + num);
    })
})

console.log("Server is Running");