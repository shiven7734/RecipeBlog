const mongoose=require('mongoose');
const category = require('./category');


const recipeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:"This is Required"
    },
    description:{
        type:String,
        required:"This is required"

    },
    email:{
        type:String,
        required:"This is required"
    },
    ingredients:{
        type:Array,
       
        required:"This is required"
    },
    category:{
        type:Array,
        
        required:"This is requried"

    },
    image:{
        type:String,
        required:"This is required"
    }

});
recipeSchema.index({name:'text',description:'text'});



module.exports=mongoose.model('Recipe',recipeSchema);