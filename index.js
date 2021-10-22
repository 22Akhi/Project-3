const express = require('express');
const data = require('./data');
const app = express();
const PORT = process.env.PORT || 5000;


//Routes

//Welcome
app.get('/', (req, res) => {
    res.send("Welcome to our schedule website")
}) 

//Get all Users
app.get('/users' , (req, res)=> {
    console.log('users ',data.users[0]);
    res.send(data.users)
})

//Get all schedules

app.get('/schedules' , (req, res) => {
    res.send(data.schedules)
})



//Get individual user

app.get('/users/:id' , (req, res) =>{
//TODO: Validate req.params.id
console.log(req.params.id);
const user = data.users[req.params.id]
res.send(user)


})

//CRUD -        Create,    Read,Update,   Delete
//  HTTP METHODS      post,    get,   put/patch,   delete










app.listen(PORT, () => {
    console.log(`Hey there App listening at  http://localhost:${PORT}`)
})

