const path=require("path")
const {
    getAllByUser,
    create,
}=require("../repositories/filesRepository");

const uploadToBucket=require("../helpers/s3");


const filesController={
    getFilesList:async(req,res)=>{
        try{
            const {user}=req;
            const userId=user.id
            let files = await getAllByUser(userId);
            if (files.length==0)
                return res.status(404).json({
                status:404,
                message:'There are no files to show '
            });
            return res.status(200).json({
              status:200,  
              files,
            });
        } catch(error) {
            console.log(error)
            return res.status(500).json({
                status:500,
                message:'Server error'
            })
            
        }
        
    },
    createFile:async(req,res)=>{
        
        try {
            let {user,files}=req;
            console.log(files)
            const {file}=files;
            const key=Date.now()+path.extname(file.name)
            const urlKey=`https://mypersonalfil.s3.sa-east-1.amazonaws.com/${key}`
            await uploadToBucket(key,file);
            const fileDB=await create(urlKey,user.id);
            return res.status(201).json({
                status:201,
                message:'File upload',
                fileDB
            })
        } catch(error) {
            console.log(error)
            res.status(500).json({
                status:500,
                message:'Server error'
            })
            
        }
    }
};

module.exports=filesController