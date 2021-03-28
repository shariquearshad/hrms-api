const { Router } = require("express")

//const router=Router()

module.exports=()=>{
const userApi=Router()

userApi.get('/',(req,res)=>{
    console.log("i am from handelling get request")
    res.json({
        message:"Get users"
    })

})
userApi.post('/',(req,res)=>{
    console.log("i am from handelling post request")
    res.json({
        message:"Post User"
    })
})
userApi.put('/:id',(req,res)=>{
    console.log("i am from handelling put request")
    res.json({
        message:"Put User" + req.params.id
    })
})
userApi.delete('/:id',(req,res)=>{
    console.log("i am from handelling delete request")
    res.json({
        message:"delete User" +req.params.id
    })
})
return userApi;

}