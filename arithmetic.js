const express =require('express');
const router =express.Router();

const{abs, sqrt, cube, pow,floor} =require('mathjs')

router.get('/add/:n1/:n2',(req,res)=>{
    try{
        let n1 =Number(req.params.n1);
        let n2 =Number(req.params.n2);
        let  sum =n1+n2
        res.send({data:{result:sum,message:""}, error : false, success : true})
        return

    }
    catch(error){
        res.send({data:{result:"",message:error.message}, error : true, success : false})
        return

    }  
})

router.get('/sub/:n1/:n2',(req,res)=>{
    try{
        let n1 =Number(req.params.n1);
        let n2 =Number(req.params.n2);
        let  sub =n1-n2
        res.send({data:{result:sub,message:""}, error : false, success : true})
        return

    }
    catch(error){
        res.send({data:{result:"",message:error.message}, error : true, success : false})
        return

    }  
})
router.get('/mult/:n1/:n2',(req,res)=>{
    try{
        let n1 =Number(req.params.n1);
        let n2 =Number(req.params.n2);
        let mult= n1*n2
        res.send({data:{result:mult,message:""},error : false,sucess :false})
        return
    }
    catch(error){
        res.send({data:{result:"",message:error.message},error :true,sucess :false})
        return
    }
})

router.get('/div/:n1/:n2',(req,res)=>{
    try{
        let n1 =Number(req.params.n1);
        let n2 =Number(req.params.n2);
        let div= n1/n2
        res.send({data:{result:div,message:""},error :false,sucess :true})
        return
    }
    catch(error){
        res.send({data:{result:"",message:error.message},error :true,sucess:false})
        return
    }
})
router.get('/absolute/:n1',(req,res)=>{
    try{
        let n1 =Number(req.params.n1);
        let absolute =abs(n1)
        res.send({data:{result:absolute,message:""},error :false,sucess:true})
        return
    }
    catch(error){
        res.send({data:{result:"",message:error.message},error:true,sucess:false})
        return
    }
})
router.get('/sqrt/:n1',(req,res)=>{
    try{
        let n1 =Number(req.params.n1);
        let square_root = sqrt(n1)
        res.send({data:{result: square_root,message:""},error :false,sucess:true})
        return
    }
    catch(error){
        res.send({data:{result:"",message:error.message},error:true,sucess:fals})
        return
    }
})
router.get('/cube/:n1',(req,res)=>{
    try{
        let n1 =Number(req.params.n1);
        let result =cube(n1)
        res.send({data:{result:result,message:""},error :false,sucess:true})
        return
    }
    catch(error){
        res.send({data:{result:"",message:error.message},error:true,sucess:false})
        return
    }
})
router.get('/power/:n1/:n2',(req,res)=>{
    try{
        let n1 =Number(req.params.n1);

        let n2 =Number(req.params.n2);
        let result=pow(n1,n2)
        res.send({data:{result:result,message:""},error:false,sucess:true})
        return  
    }
    catch(error){
        res.send({data:{result:"",message:error.message},error:true,sucess:false})
        return
    }
})

router.get('/addbody',(req,res)=>{
    try{
        let n1 =Number(req.body.n1);
        let n2 =Number(req.body.n2);
        let result=n1+n2
        res.send({data:{result:result,message:""},error:false,sucess:true})
        return  
    }
    catch(error){
        res.send({data:{result:"",message:error.message},error:true,sucess:false})
        return
    }
})
router.get('/floorbody',(req,res)=>{
    try{
        let n1 =Number(req.body.n1);
        let result =floor(n1)
        res.send({data:{result:result,message:""},error :false,sucess:true})
        return
    }
    catch(error){
        res.send({data:{result:"",message:error.message},error:true,sucess:false})
        return
    }
})

module.exports =router;