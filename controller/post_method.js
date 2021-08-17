const Connection = require("../database_connection/config")
const axios = require('axios')
// const fs = require('fs')


module.exports.post_data = (req,res)=>{
    axios.get("http://saral.navgurukul.org/api/courses").then((resp) => {
        const str = JSON.stringify(resp.data,null,4)
        const data=JSON.parse(str)
        var a=data["availableCourses"]
        res.send(a)
        // console.log(a)

    
    // var fetch = a[0]
    // console.log(fetch)

        for (var i in a){
            if(i==5){

                break;
            }
            var pro1=(a[i].id)   
            var pro2=(a[i].name)
            var pro3= (a[i].type)
            var pro4 = (a[i].logo)
            var pro5=(a[i].short_description)
            // var practice =[pro1,pro2,pro3,pro4,pro5]

        

        var sql = `INSERT INTO merakiapi (id,name,type,logo,short_description) VALUES (?,?,?,?,?)`;   
        Connection.query(sql, [pro1,pro2,pro3,pro4,pro5],(err,result)=>{
            if (!err){
                console.log(result)
            }else{
                console.log(err);
            }
        })
        
        
    
        
    
    
}


     
        





    



        
    
    })



}
