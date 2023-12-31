const express = require('express')
const router = express.Router()
const student = require('../model/USer')

router.get('/:id', async(req,res) => {
    try{
        const stud = await student.findById(req.params.id)
        res.json(stud)
    }catch(err){
        res.send('Enter valid username.')
    }
})