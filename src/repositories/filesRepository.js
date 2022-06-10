const {File}=require("../database/models/index");

const filesRepository={
    getAllByUser:async(UserId)=>{
        const files=await File.findAll({
            where:{
                UserId
            },
            attributes:["name"]
        });
        return files
    },
    create:async(name,UserId)=>{
        const file=await File.create({
            name,
            UserId
        })
        return file
    },
}

module.exports=filesRepository