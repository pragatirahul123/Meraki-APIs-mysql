const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const app = express()
app.use(express.json())
// const port = 3079

var Connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Pragati@12",
    database : "javapoint"
});

var sql = "create table if not  exists merakiapi (id int(11), name varchar(233),type varchar(355),logo varchar(233),short_description varchar(233))";
Connection.query(sql,(err,result)=>{
            if(err) throw err
            console.log("create table")
            // result.send("table creted")
})


module.exports = Connection


    