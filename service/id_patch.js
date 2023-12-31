const express = require('express')
const router = express.Router()
const detail = require('../model/USer')

router.patch('/:id', async(req,res) => {
    try{
        const stud = await detail.findById(req.params.id); // Find the index of the task you want to update
        const taskIndex = stud.tasks.findIndex(task => task._id == req.body.taskId); // Update the 'done' field for the specific task
        stud.tasks[taskIndex].done = req.body.done;// Save the updated student document
        const updatedStudent = await stud.save();
        res.json(updatedStudent);
    }catch(err){
        res.send('ERROR'+ err)
    }
})