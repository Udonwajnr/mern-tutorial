const express  = require('express')
const router = express.Router()
const {getGoal,setGoal,updateGoal,deleteGoal} = require('../controller/goalController')
const {errorHandler} = require('../middleware/middelware')
router.get("/",getGoal)

router.post("/",setGoal)

router.put("/:id",updateGoal)

router.delete("/:id",deleteGoal)

module.exports = router