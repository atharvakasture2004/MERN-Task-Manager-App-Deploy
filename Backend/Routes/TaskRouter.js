const { fetchAllTasks, createTask, updateTaskbyId, deleteTaskbyId } = require("../Controllers/TaskController.js");

const router= require("express").router;


router.get("/",fetchAllTasks)

router.post("/",createTask);

router.put("/:id",updateTaskbyId);

router.delete("/:id",deleteTaskbyId);


module.exports=router;