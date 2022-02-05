const express=require('express');
const category = require('../models/category');
const feedback = require('../models/feedback');

const Recipe=require('../models/re');

const router=express.Router();

router.get('/',async (req,res)=>{
    const categories=await category.find({});
    const latest=await Recipe.find({}).sort({_id:-1});
    const thai=await Recipe.find({'category':'Thai'});
    const indian=await Recipe.find({category:'Indian'});
    const american=await Recipe.find({'category':'American'})
    const mexican=await Recipe.find({'category':'Mexican'});
    res.render('index',{categories,latest,thai,indian,american,mexican})
});
router.get('/recipe/:id',async(req,res)=>{
    const rid=req.params.id;
    const recipe=await Recipe.findById(rid);
    res.render('recipe',{recipe});



});
router.get('/categories',async(req,res)=>{
    const categories=await category.find({});
    res.render('cc',{categories});
})
router.get('/faq',async(req,res)=>{
    res.render('faqs');
})
router.get('/feedback',async(req,res)=>{
    res.render('feedback');
})
router.post('/feedback',async(req,res)=>{
    const feed= new feedback({
        name:req.body.Name,
        PhoneNo:req.body.Regno,
        Email:req.body.email,
        Feedback:req.body.Description

    })
    await feed.save();
    res.redirect('/feedback');

    
})
router.get('/categories/:id',async(req,res)=>{
    try{
     const cid= req.params.id;
     const category1=await Recipe.find({'category':cid});
     res.render('cc',{category1});
    }
    catch (error) {
        res.status(500).send({message: error.message || "Error Occured" });
      }

})

router.get('/submit',async(req,res)=>{
    res.render('submit');
    



});
router.get('/explore',async(req,res)=>{
    const recipe=await Recipe.find({}).sort({_id:-1});
    res.render('explore',{recipe});

})

router.get('/show',async(req,res)=>{
    let c= await Recipe.find().countDocuments();
    let random=Math.floor(Math.random() *c);
    let recipe=await Recipe.findOne().skip(random).exec();
    res.render('show',{recipe});

})
router.post('/search',async(req,res)=>{
    let ss= req.body.s;

    let recipe=await Recipe.find({$text :{ $search :ss,$diacriticSensitive:true}});


    res.render('search',{recipe});

})
router.post('/submit-recipe',async(req,res)=>{
    const recipe=new Recipe({
        name:req.body.name,
        description:req.body.description,
        email:req.body.email,
        ingredients:req.body.ingredients,
        category:req.body.category,
        image:req.body.image

    });
    await recipe.save();

    res.redirect('/submit');


});


module.exports=router;