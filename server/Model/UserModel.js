const mongoose =require('mongoose')
const UserScheme=new mongoose.Schema({ 

Email:{type:String},
Passeword:{type:String},


   })
   module.exports=mongoose.model('User',UserScheme)