const axios = require('axios')
const fs = require('fs')
const express = require("express")
const bodyParser = require("body-parser");
const app = express()
app.use(express.json())
const port = 3079

// var sql = "create table if not  exists a(id int, name  varchar(233), section varchar(55))";
axios.get("http://saral.navgurukul.org/api/courses").then((resp) => {
    const str = JSON.stringify(resp.data,null,4)
    // console.log(str);



        var b = fs.writeFile("demodata.json", str,(err) => {
            console.log("data wrote.....")})

        })
    
