const express  = require('express')
const router = express.Router()

router.get("/api/goals",(req,res)=>{
    res.json({
        message:'Get Goals'
    })
})

module.exports = router