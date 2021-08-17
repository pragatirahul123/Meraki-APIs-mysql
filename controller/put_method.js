const Connection = require("../database_connection/config")

module.exports.update_data=(req,res)=>{
    let sql="UPDATE merakiapi SET name='" +req.body.name+ " ',type='"+req.body.type+" ',logo='"+req.body.logo+" ',short_description='"+req.body.short_description+ "'WHERE id="+ req.params.id;
    let quary = Connection.query(sql,(err,result)=>{
        if(err) throw err
        console.log("successfully")
        res.send("update suceefully")
        res.send(result)



})




        
}