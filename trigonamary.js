const express =require('express');
const router =express.Router();
const{sin,cos,tan,asin,cot} =require('mathjs')
router.get('/sinbody',(req,res)=>{
    try{
    let n1 =req.body.n1;
    let result=sin(n1)
    res.send({data:{result:result,message:""},error:false,sucess:true})
    return
    }
    catch(error){
    res.send({data:{result:"",message:error.message},error:true,sucess:false})
    return
    }
})
router.get('/cosbody',(req,res)=>{
    try{
    let n1 =req.body.n1;
    let result=cos(n1)
    res.send({data:{result:result,message:""},error:false,sucess:true})
    return
    }
    catch(error){
    res.send({data:{result:"",message:error.message},error:true,sucess:false})
    return
    }
})
router.get('/tanbody',(req,res)=>{
    try{
    let n1 =req.body.n1;
    let result=tan(n1)
    res.send({data:{result:result,message:""},error:false,sucess:true})
    return
    }
    catch(error){
    res.send({data:{result:"",message:error.message},error:true,sucess:false})
    return
    }
})
router.get('/cotbody',(req,res)=>{
    try{
    let n1 =req.body.n1;
    let result=cot(n1)
    res.send({data:{result:result,message:""},error:false,sucess:true})
    return
    }
    catch(error){
    res.send({data:{result:"",message:error.message},error:true,sucess:false})
    return
    }
})
router.get('/asinbody',(req,res)=>{
    try{
    let n1 =req.body.n1;
    let result= asin(n1)
    res.send({data:{result:result,message:""},error:false,sucess:true})
    return
    }
    catch(error){
    res.send({data:{result:"",message:error.message},error:true,sucess:false})
    return
    }
})

module.exports = router;