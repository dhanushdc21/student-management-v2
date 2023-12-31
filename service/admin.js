const express = require('express')
const router = express.Router()
const student = require('../model/USer')

router.post('/admin', async(req,res) => {
    const accept = new detail({
        name:req.body.name,
        emailID:req.body.emailID,
        password:req.body.password,
        tasks:req.body.tasks
    })

    try{
        const a1= await accept.save()
        res.send(a1)
    }catch(err){
        res.send('ERROR' +err)
    }
})