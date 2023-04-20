const express =require('express');
const Programme =require('../models/Programmes');

const router = express.Router();
//Add new Programme
router.post('/add/programme',async (req,res)=>{
    let newProgramme =new Programme(req.body);

    try{
        const savedProgramme = await newProgramme.save()
        res.status(200).json(savedProgramme)
    }catch(err){
        res.status(500).json(err)
    }
});

//Read

router.get('/programmes',async(req,res)=>{
    try{
        const programmes = await Programme.find(
            req.params.id
        );
        res.status(200).json(programmes)
    }catch(err){
        res.status(500).json(err)
    }
});

//update 
router.put('/programme/update/:id',async (req,res)=>{
    try{
        const updatedProgramme = await Programme.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedProgramme)
    }catch(err){
        res.status(500).json(err)
    }
});
//Delete
router.delete('/programme/delete/:id',async(req,res)=>{
        try{
            await Programme.findByIdAndDelete(
                req.params.id
            );
            res.status(200).json("Programme has been deleted.");
        }catch(err){
            res.status(500).json(err)
        }
});

module.exports = router;