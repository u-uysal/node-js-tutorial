const express = require('express');
const app = express();

app.use(express.json()); // when we wanted to "post" sth.

const courses = [
    {id : 1 ,name:"course1"},
    {id : 2 ,name:"course2"},
    {id : 3 ,name:"course3"}
]

app.get('/',  (req, res) =>{
    res.send('hello world')
});
app.get('/api/courses',  (req , res) =>{
    res.send(courses)
});
app.get('/api/courses/:id',  (req , res) =>{
    const course =courses.filter(data =>data.id == req.params.id);
//  const course =courses.filter(data =>data.id === parseInt(req.params.id));
    if(course.length === 0) {res.status(404).send("Nothing found!")};
    res.send(course);
 });
 app.post('/api/courses',  (req, res)=> { //because we will add new course
    const course = {
        id : courses.length+1,
        name : req.body.name 
    };
    courses.push(course);
    res.send(courses)
  })

app.listen(4000,()=>{
    console.log("listening port 4000");
})