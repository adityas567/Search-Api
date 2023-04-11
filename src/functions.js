const pool=require('../src/db')

const getStudents=(req,res)=>{
   pool.query("SELECT * from student_data;",(error,results)=>
   {
    if(error)
    {
        throw error;
    }
    res.status(200).json({status:true, data:results.rows});
   });

}

const getStudentsById=(req,res)=>
{
    pool.query("SELECT * from student_data WHERE student_id= $1",[req.params.key],(error,results)=>
    {
        if(error)
        {
            throw error
        }
        res.status(200).json({status:true, data:results.rows});
    });

}

// const getStudentsByName=(req,res)=>
// {

//     pool.query("SELECT student_id,full_name,age,phno,email,address,course_id from student_data WHERE full_name like $1",[`%${req.params.key}%`],(error,results)=>
//     {
//         if(error)
//         {
//             throw error
//         }
//         res.status(200).json(results.rows);
//     });

// }

module.exports=
{
    getStudents,
    getStudentsById,
    // getStudentsByName
}