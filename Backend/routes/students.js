const express =require('express');
const Student =require('../models/Students');

const router = express.Router();
//Add new Student
router.post('/add/student',async (req,res)=>{
    let newStudent =new Student(req.body);

    try{
        const savedStudent = await newStudent.save()
        res.status(200).json(savedStudent)
    }catch(err){
        res.status(500).json(err)
    }
});

// get all Students

router.get('/students',async(req,res)=>{
    try{
        const Students = await Student.find(
            req.params.id
        );
        res.status(200).json(Students)
    }catch(err){
        res.status(500).json(err)
    }
});

// update 
router.put('/student/update/:id',async (req,res)=>{
    try{
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedStudent)
    }catch(err){
        res.status(500).json(err)
    }
});
//Delete
router.delete('/student/delete/:id',async(req,res)=>{
        try{
            await Student.findByIdAndDelete(
                req.params.id
            );
            res.status(200).json("Student has been deleted.");
        }catch(err){
            res.status(500).json(err)
        }
});

module.exports = router;