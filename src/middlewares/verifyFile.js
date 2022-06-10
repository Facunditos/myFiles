const verifyFile=(req,res,next)=>{
    console.log(req)
    if (!req.files||!req.files.file) {
        return res.status(400).json({
            status:400,
            message:'There is no file to update'
        }) 
    };
    next()

}

module.exports=verifyFile