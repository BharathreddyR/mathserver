const express =require('express');
const router =express.Router();
const {bitAnd,bitOr,bitXor} = require('mathjs')
router.get('/and/:n1/:n2',(req,res)=>{
    try{
        let n1 =Number(req.params.n1);
        let n2 =Number(req.params.n2);
        let and=bitAnd(n1,n2)
        res.send({data:{result:and,message:""},error :false,sucess :true})
        return
    }
    catch(error){
        res.send({data:{result:"",message:error.message},error :true,sucess:false})
        return
    }
})
router.get('/or/:n1/:n2',(req,res)=>{
    try{
        let n1 =Number(req.params.n1);
        let n2 =Number(req.params.n2);
        let or =bitOr(n1,n2)
        res.send({data:{result:or,message:""},error :false,sucess :true})
        return
    }
    catch(error){
        res.send({data:{result:"",message:error.message},error :true,sucess:false})
        return
    }
})
router.get('/xorbody',(req,res)=>{
    try{
        let n1 = Number(req.body.n1);
        let n2 = Number(req.body.n2);
        let result = bitXor(n1,n2)
        res.send({data:{result:result,message:""},error :false,sucess :true})
        return
    }
    catch(error){
        res.send({data:{result:"",message:error.message},error :true,sucess:false})
        return
    }

})
module.exports = router;