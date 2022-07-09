const express = require("express");
const app = express();
const {pool} = require("./connection-db");
const session = require("express-session");
const flash = require("express-flash");


const PORT =  process.env.PORT || 3000;
app.use(express.urlencoded({extended:false}));

app.use(session({
    secret: 'secret', 
    resave: false,
    saveUninitialized: false
}))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index");
})

app.get("/users/login", (req,res) => {
   res.render("login");
});
app.get("/users/dashboard", (req,res) => {
    res.render("dashboard",{user:"Andrea"});
 });
app.post('/users/login', (req,res) => {
    let {email, password} = req.body;
    console.log({email, password});
})
app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`);
});