const express=require('express');
const app=express();
const path = require("path")

const port=8000;

app.listen(port,()=>console.log(`${port}`));
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/css',express.static(__dirname+'/node_modules/bootstrap/dist/css'))
app.use('/img',express.static(__dirname+'public/img'))
app.use('/js',express.static(__dirname+'/public/js/'))
app.use('/fontawe', express.static(__dirname + '/node_modules/font-awesome/css/'));
app.use('/bootstrap-social', express.static(__dirname + '/node_modules/bootstrap-social/'));
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/jquery',express.static(__dirname+'/node_modules/jquery/dist/'));
app.use('/popper',express.static(__dirname+'/node_modules/popper.js/dist/umd/'));


app.set('views','./views')
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('home');
});
app.get('/today',(req,res)=>{
    res.render('Today');
})
app.get('/notes',(req,res)=>{
    res.render('Note');
})