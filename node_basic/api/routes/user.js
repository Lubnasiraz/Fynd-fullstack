const express = require("express");

const router=express.Router();


let users=[
    {
    name:"lubna",
    id:1
},
{
        name:"prachi",
        id:2
    },
]
router.post("/",(req, res, next)=>
{
    users.push(req.body);
    res.json({meesage:"successfully push"})
})
router.get("/",(req,res,next)=>
{
    res.json({
        //message:"this is coming from user router"
        users:users
    })
})
module.exports=router;