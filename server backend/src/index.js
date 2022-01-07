const mysql=require("mysql");
const express=require("express");
const cors =require("cors");
const app=express();
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

app.use(express.json())
app.use(cors())

const conninfo=
{
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "myapp",
}
const connection=mysql.createConnection(conninfo)
app.post("/store",async (req,res)=>{
    const message=req.body.message;
   await connection.queryAsync(`insert into messagestore(message) values(?)`,[message])
}
)
app.get("/getdata",async (req,res)=>{
    const list=await connection.queryAsync(`select * from messagestore`,[]);
    res.json(list);
})
app.listen(4000,()=>{console.log("its working fine")})