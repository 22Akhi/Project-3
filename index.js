const express = require('express');
const bcrypt = require('bcryptjs');
const morgan = require('morgan');
const data = require('./data');
const app = express();
const PORT = process.env.PORT || 5000;

//logger middleware
app.use(morgan('dev'))


//Routes

//Welcome-
app.get('/', (req, res) => {
    res.render("pages/home")
}) 

//Get all Users
app.get('/users' , (req, res)=> {
   
    //res.send(data.users)

    res.render('pages/users', {
        users:data.users
    })
})

//Get all schedules

app.get('/schedules' , (req, res) => {
    res.send(data.schedules)
})




app.get('/users/add', (req, res) => {
    res.render('pages/new-user')
})

//Get individual user

app.get('/users/:id' , (req, res) =>{
//TODO: Validate req.params.id
console.log(req.params.id);
const user = data.users[req.params.id]
res.send(user)


})


//Get individual schedules

app.get('/schedules/:id' , (req, res) =>{
//TODO: Validate req.params.id
console.log(req.params.id);
const schedule = data.schedules[req.params.id]
res.send(schedule)


})



//JSON AND FORM parsing middle of something
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//Create New Post

app.post('/posts' ,(req,res) => {
//TODO:Validate data


    //Add post to all  posts
    data.schedules.push(req.body)
    res.send(req.body)
})









//Create New user

app.post('/users', (req, res)=> {
    const password = req.body.password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    // TODO: Add hash to user object and then push to user array

    data.users.push({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password:hash
    })
    res.redirect('/users')
})
//CRUD -        Create,    Read,Update,   Delete
//  HTTP METHODS      post,    get,   put/patch,   delete




//Set view engines

app.set('view engine', 'ejs')


//Set static folder
app.use(express.static('public'))


app.listen(PORT, () => {
    console.log(`Hey there App listening at  http://localhost:${PORT}`)
})




app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded






//Create New User

app.post('/users', (req, res) => {
res.send(req.body)
})



//Post one particular user
app.get('/users/:id/posts', (req,res) =>{
  const posts = data.schedules.filter(post => post.user_id === Number(req.params.id))  
  //TODO:   Validate- if array has data , then send it. Otherwise show error
  res.send(posts)
}
)


//Add new post

app.post('/posts', (req, res) => {


    data.posts.push(req.body)
    res.send
}
)