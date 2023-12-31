const express = require('express');
const router = express.Router();
const detail = require('../model/User');

router.delete('/admin/:id', async (req, res) => {
  try {
    const stud = await detail.findById(req.params.id);

    if (!stud) {
      return res.json({ error: 'Student not found' });
    }

    const taskId = req.body.taskId;
    const taskIndex = stud.tasks.findIndex((task) => task._id == taskId);

    if (taskIndex === -1) {
      return res.json({ error: 'Task not found' });
    }

    stud.tasks.splice(taskIndex, 1);
    const updatedStudent = await stud.save();
    return res.json(updatedStudent);
  } catch (err) {
    return res.send('ERROR' + err);
  }
});

module.exports = router;
