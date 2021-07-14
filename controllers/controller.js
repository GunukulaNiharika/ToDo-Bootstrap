const User =require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const handleErrors = (err) => {
    //  console.log(err.message, err.code);
      let errors = { email: '', password: '', mobile: '', username:'', cred:''};
    
      // duplicate error
      if (err.code === 11000) {
        errors.cred = 'These credentials already exist';
        return errors;
      }
    
      // incorrect username
      if (err.message === 'incorrect username') {
        errors.username = 'That username is not registered';
      }
    
      // incorrect password
      if (err.message === 'incorrect password') {
        errors.password = 'That password is incorrect';
      }
    
      // validation errors
      if (err.message.includes('user validation failed')) {
    
        Object.values(err.errors).forEach(({ properties }) => {
     
          errors[properties.path] = properties.message;
        });
      }
    
      return errors;
}
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.jwt_secret, {
    expiresIn: maxAge
  });
};

module.exports.signup_post = async (req, res) => {
    const{ email, password, username } = req.body;
    try {
    
      const user = await User.create({ email, password, username });
      const token = createToken(user._id);
    
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(201).json({ user: user._id });
    }
    catch(err) {
      const message = handleErrors(err);
      res.status(400).json({message });
    }
  }
  
  module.exports.login_post=async(req,res)=>{
    const {username, password} = req.body;
    try {
      const user = await User.login(username, password);
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({ user: user._id });
    } catch (err) {
      const errors = handleErrors(err);
      res.status(400).json({errors});
    }
}

module.exports.logout_get = (req, res) => {
  const token = req.cookies.jwt; 
  jwt.verify(token,process.env.jwt_secret, async (err, decodedToken) => {
      let user = await User.findById(decodedToken.id); 
  });
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}


module.exports.home_get=async(req,res)=>{
  const token = req.cookies.jwt; 
    if (token) {
      jwt.verify(token, process.env.jwt_secret, async (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.render('home',{userobj:"null"});
        } else {
          let user = await User.findById(decodedToken.id); 
          res.render('home',{userobj:user});
        }
      });   
    } 
    else {
      res.render('home',{userobj:"null"});
    }
}

module.exports.today_get=(req,res)=>{
  const token = req.cookies.jwt; 
    if (token) {
      jwt.verify(token, process.env.jwt_secret, async (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.render('home',{userobj:"null"});
        } else {
          let user = await User.findById(decodedToken.id); 
          res.render('Today',{userobj:user});
        }
      });   
    } 
    else {
      res.redirect('/');
    }
}
module.exports.notes_get=(req,res)=>{
  const token = req.cookies.jwt; 
    if (token) {
      jwt.verify(token, process.env.jwt_secret, async (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.render('home',{userobj:"null"});
        } else {
          let user = await User.findById(decodedToken.id); 
          res.render('Note',{userobj:user});
        }
      });   
    } 
    else {
      res.redirect('/');
    }
}

module.exports.addtask_post=(req,res)=>{
  const { title, date, priority } = req.body;

  try{
    const token=req.cookies.jwt;
    if(token){
      jwt.verify(token, process.env.jwt_secret, async(err, decodedToken)=>{
        if(err){
          res.locals.user=null;
        }
        else{
          let is_Checked=false;
          let user=await User.findById(decodedToken.id);
          const addtask={title, date, priority, is_Checked };
          user.task.push(addtask);
          const updated = await user.save(); 
          res.status(200).json({ user: user._id });
        }
      });
    }
    else{
      res.redirect('/');
    }
  }
  catch(err){
    console.log(err);
  }
}
module.exports.addnote_post=(req,res)=>{
  const { Note, Text } = req.body;

  try{
    const token=req.cookies.jwt;
    if(token){
      jwt.verify(token, process.env.jwt_secret, async(err, decodedToken)=>{
        if(err){
          res.locals.user=null;
        }
        else{
          let user=await User.findById(decodedToken.id);
          const addtask={Note, Text};
          user.notes.push(addtask);
          const updated = await user.save(); 
          res.status(200).json({ user: user._id });
        }
      });
    }
    else{
      res.redirect('/note');
    }
  }
  catch(err){
    console.log(err);
  }
}