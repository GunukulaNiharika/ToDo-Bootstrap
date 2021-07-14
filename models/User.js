const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const addTaskSchema=new mongoose.Schema({
title:{
    type:String,
    required:[true, 'Please enter task'],
    maxlength:10
},
date:{
    type: Date,
    required:[true,'Please enter date']
},
priority:{
    type:String,
    default:'Normal'
},
is_Checked:{
    type:Boolean,
    default:false
}
})

const addNoteSchema=new mongoose.Schema({
    Note:{
        type:String,
        required:[true, 'Please enter Note title'],
        maxlength:10
    },
  
    Text:{
        type:String,
        required:[true, 'Please enter Some Text'],
    }
})
const UserSchema=new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'please enter a email'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    username: {
        type: String,
        required: [true, 'please enter a username'],
        unique: true,
        lowercase: true
    },
    task:[addTaskSchema],
    notes:[addNoteSchema],
})

// fire a function before doc saved to db
UserSchema.pre('save', async function(next) {
    if(!this.isModified("password")){
      return next;
    }
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    
    next();
});
UserSchema.statics.login = async function(username, password) {
    const user = await this.findOne({username});
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect username');
};
  
const User = mongoose.model('user', UserSchema);
module.exports = User;