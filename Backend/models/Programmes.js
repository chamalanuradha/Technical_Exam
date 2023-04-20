const mongoose=require ("mongoose");

const programmeSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required :true
    },
    code:{
        type:String,
        required :true
    },
    Duration:{
        type:String,
        required :true
    },
    Price:{
        type:String,
        required :false
    }
});
module.exports=mongoose.model('Programmes',programmeSchema)