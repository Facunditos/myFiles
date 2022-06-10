const express=require('express');
const router=express.Router();
const {verifyTokenLogin}=require("../middlewares/verifyToken")
const verifyFile=require("../middlewares/verifyFile");

const {
    getFilesList,
    createFile,
}=require('../controllers/filesController');



router.get('/',verifyTokenLogin,getFilesList);
router.post('/',verifyTokenLogin,verifyFile,createFile);

module.exports=router
