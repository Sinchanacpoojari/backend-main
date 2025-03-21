const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    username:{type:String,required:true},
    gmail:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

module.exports=mongoose.model('User',UserSchema)
