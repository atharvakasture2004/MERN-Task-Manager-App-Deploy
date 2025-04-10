const TaskModel = require("../Models/TaskModel.js");

const createTask =async  (req,res)=>{
    const data = req.body;
    try {
        const model = new TaskModel(data);
        await model.save();
        res.status(201).json({message: "Task is created ",success:true});
        
    } catch (error) {
        res.status(500).json({message: "Failed to create Task", success:false });
    }
}

const fetchAllTasks =async  (req,res)=>{
    
    try {
        const data = await TaskModel.find({});
        
        res.status(200).json({message: "All Tasks ",success:true,data });
        
    } catch (error) {
        res.status(500).json({message: "Failed to get all Tasks", success:false });
    }
}


const updateTaskbyId =async  (req,res)=>{
    
    try {
        const id =req.params.id;
        const body = req.body;
        const obj = {$set : {...body }};
         await TaskModel.findByIdAndUpdate(id,obj);
        
        res.status(200).json({message: " Task updated ",success:true });
        
    } catch (error) {
        res.status(500).json({message: "Failed to update Task", success:false });
    }
}


const deleteTaskbyId =async  (req,res)=>{
    
    try {
        const id =req.params.id;
        await TaskModel.findByIdAndDelete(id);
        
        res.status(200).json({message: " Task deleted ",success:true,data });
        
    } catch (error) {
        res.status(500).json({message: "Failed to delete Task", success:false });
    }
}


module.exports={
    createTask,
    fetchAllTasks,updateTaskbyId,
    deleteTaskbyId
}