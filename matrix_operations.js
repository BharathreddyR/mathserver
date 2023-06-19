const express =require('express');
const router =express.Router();
const {det,diag,sum, multiply} =require('mathjs')
router.get('/detbody',(req,res)=>{
    try{
    let mat1 = req.body.mat1;
    let result = det(mat1)
    res.send({data:{result:result,message:""},error:false,sucess:true})
    return
    }
    catch(error){  
    res.send({data:{result:"",message:error.message},error:true,sucess:false})
    return
    }
})
router.get('/diagbody',(req,res)=>{
    try{
    let mat1 = req.body.mat1;
    let result= diag(mat1)
    res.send({data:{result:result,message:""},error:false,sucess:true})
    return
    }
    catch(error){
    res.send({data:{result:"",message:error.message},error:true,sucess:false})
    return
    }
})
router.get('/sumbody',(req,res)=>{
    try{
    let mat1 = req.body.mat1;
    let result= sum(mat1)
    res.send({data:{result:result,message:""},error:false,sucess:true})
    return
    }
    catch(error){
    res.send({data:{result:"",message:error.message},error:true,sucess:false})
    return
    }
})
router.get('/multiplybody',(req,res)=>{
    try{
    let mat1 = req.body.mat1;
    let result= multiply(mat1)
    res.send({data:{result:result,message:""},error:false,sucess:true})
    return
    }
    catch(error){
    res.send({data:{result:"",message:error.message},error:true,sucess:false})
    return
    }
})

    

module.exports = router;