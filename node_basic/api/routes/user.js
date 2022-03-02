const express = require("express");

const router=express.Router();
router.get("/",(req,res,next)=>
{
    res.json({
        message:"this is coming from user router"
    })
})
module.exports=router;