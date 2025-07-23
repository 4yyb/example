const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('common'));
app.use((req,res,next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    return next();
})

app.use((req,res,next) => {
    console.log("I LOVE DOGS")
    return next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'haha') {
        return next();
    }
    res.send('sorry you need a password')
}

app.get('/', (req,res)=>{
    console.log(`REQUEST DATE ${req.requestTime}`)
    res.send('Home Page!');
})

app.get('/error', (req,res)=>{
    chicken.fly()
})

app.get('/dogs', (req,res) => {
    console.log(`REQUEST DATE ${req.requestTime}`)
    res.send('WOOF WOOF');
})

app.get('/secret', verifyPassword, (req,res)=>{
    res.send('sada')
})

app.use((req,res)=>{
    res.status(404).send('NOT FOUND')
})

app.listen(3000, ()=>{
    console.log('APP is running on localhost:3000');
})