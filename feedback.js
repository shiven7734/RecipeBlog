const mongoose=require('mongoose');

const feedbackSchema=new mongoose.Schema({
    name:{
        type:String,
        required:"Needed"
    },
    PhoneNo:{
        type:String,
        required:"Needed"
    },
    Email:{
        type:String,
        required:"Needed"
    },
    Feedback:{
        type:String,
        required:"Needed"
    }


});







module.exports=mongoose.model('feedback',feedbackSchema);
