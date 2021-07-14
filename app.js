const express=require('express')
const path = require("path")
const mongoose=require("mongoose")
const route=require('./routes/route');
const cookieParser = require('cookie-parser');
// penguin = require('penguin')

const dotenv = require('dotenv')
dotenv.config();
const app=express();


// admin = new penguin.Admin()


mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) =>{
      console.log('mongodb connected');
      app.listen(process.env.PORT,()=>console.log(`${process.env.PORT}`));

})
  .catch((err) => console.log(err));

// admin.setupApp(app)
app.use(express.static('public'))
app.use(express.json());
app.use(cookieParser());
app.use('/css',express.static(__dirname+'public/css'))
app.use('/css',express.static(__dirname+'/node_modules/bootstrap/dist/css'))
app.use('/img',express.static(__dirname+'public/img'))
app.use('/js',express.static(__dirname+'/public/js/'))
app.use('/fontawe', express.static(__dirname + '/node_modules/font-awesome/css/'));
app.use('/bootstrap-social', express.static(__dirname + '/node_modules/bootstrap-social/'));
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/jquery',express.static(__dirname+'/node_modules/jquery/dist/'));
app.use('/popper',express.static(__dirname+'/node_modules/popper.js/dist/umd/'));
app.use('/partials',express.static(__dirname+'/views/partials/'));

app.set('views','./views')
app.set('view engine','ejs')

app.use(route);