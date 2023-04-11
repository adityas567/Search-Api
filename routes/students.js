const express=require('express');

const router=express.Router();

const control=require('../src/functions');

const pattern= /[^a-zA-Z]/g;

const pool=require('../src/db')



router.get('/',control.getStudents)

router.get('/:key',(req,res)=>
{
        pool.query("SELECT * from student_data WHERE student_id= $1",[req.params.key],(error,results)=>
    {
        if(error)
        {
            throw error
        }
        res.status(200).json({status:true, data:results.rows});
    });
    
})




// router.get('/getByName/:key',control.getStudentsByName)

module.exports=router



