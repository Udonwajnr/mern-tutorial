const asyncHandler = require("express-async-handler")

const Goal = require("../model/goalModel")
// @ desc    Get goals
// @ route    Get /api/goal
const getGoal  = asyncHandler(async(req,res)=>{
    const goal = await Goal.find()
    res.status(200).json(goal)
})

const setGoal  = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create(
        {
            text:req.body.text
        }
    )

    res.status(200).json(goal)
})

const updateGoal  = asyncHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error("Goal Not Found")
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.json(updateGoal)
})

const deleteGoal  = asyncHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal Not Found")
    }
     await Goal.findByIdAndDelete(req.params.id)
    res.json(req.params.id)
})

module.exports = {
    getGoal,setGoal,updateGoal,deleteGoal
}