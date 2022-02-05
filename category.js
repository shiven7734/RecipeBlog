const mongoose=require('mongoose');


const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:"Needed"
    },
    image:{
        type:String,
        required:"Needed"
    }


});

module.exports=mongoose.model('Category',categorySchema);