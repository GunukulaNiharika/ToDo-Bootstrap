const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const addTaskSchema=new mongoose.Schema({
task:{
    type:String,
    required:[true, 'Please enter task'],
    maxlength:8
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
        maxlength:8
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
      task:[addTaskSchema],
      notes:[addNoteSchema],
})

// fire a function before doc saved to db
userSchema.pre('save', async function(next) {
    if(!this.isModified("password")){
      return next;
    }
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    
    next();
  });
  