const express = require("express");
const app = express();

app.get("./api/course/:year/:month" , (req,res)=>{
    res.send(req.params);
    console.log(req.params)
});

const PORT =process.argv.PORT ||  3000;
app.listen(PORT,()=>{
    console.log("we are listening to port " + PORT);
})
