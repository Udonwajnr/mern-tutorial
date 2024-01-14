const asyncHandler = require("express-async-handler")
// @ desc    Get goals
// @ route    Get /api/goal
const getGoal  = asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Get Goals'})
})

const setGoal  = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message:'Get Goals'})
})

const updateGoal  = asyncHandler(async(req,res)=>{
    res.json({
        message:`Update Goals ${req.params.id}`
    })
})

const deleteGoal  = asyncHandler(async(req,res)=>{
    res.json({
        message:`Delete Goals ${req.params.id}`
    })
})

module.exports = {
    getGoal,setGoal,updateGoal,deleteGoal
}