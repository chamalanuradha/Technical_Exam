const mongoose=require ("mongoose");

const StudentSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    Address:{
        type: String,
        required: true,
    },
    Email:{
        type: String,
        required: false,
    },
    Phone:{
        type: String,
        required: true,
    }
});

module.exports=mongoose.model('Students',StudentSchema)