const express = require("express");
const app = express();

app.put("/api/courses/:id",(req,res)=>{
    //Look up the course.İf not existing ,return 404
    //Validate. İf it is invalid,return 400 bad request.
    //Uptade course. Return uptaded course.
    course.name = req.body.name;
    res.send(course);
});