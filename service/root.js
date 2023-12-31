const express = require('express')
const router = express.Router()
const student = require('../model/USer')

try{
    // const students = await student.find()
    // res.json(students)
    const { emailID, password } = req.body;

    if(emailID==='admin@aadmin.com' && password==='admin'){
        const students = await student.find()
        console.log("hi")
        res.json(students)
        res.redirect('/admin')
    }
    else{
        //res.json({ message: 'Not admin' });
        const stud = await student.findOne({ emailID });
        if (!stud) {
            res.json({ error: 'Student not found' });
        }
        if (stud.password === password) {
            res.json({ message: 'Login successful' });
            const redirect = `/:${stud.id}`;
            res.redirect(redirect);
        } else {
            res.json({ error: 'Invalid credentials' });
        }
    }
}catch(err){
    res.send('ERROR' + err)
}