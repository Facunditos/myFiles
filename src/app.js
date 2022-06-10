require("dotenv").config();
const fs=require("fs");
const path=require("path");
const usersRouter=require("./routes/users");
const filesRouter=require("./routes/files");
const express=require("express");
const fileUpload=require("express-fileupload");
const swaggerUi = require('swagger-ui-express');
const ymal = require("js-yaml");

const doc = ymal.load(fs.readFileSync(path.join(__dirname,"doc/documentation.yml"), 'utf8'));

const app=express();

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/',
    debug:true
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/users",usersRouter);
app.use("/files",filesRouter);
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(doc));

const port=process.env.PORT||3030
app.listen(port,()=>console.log(`server is ranning on port ${port}`));





