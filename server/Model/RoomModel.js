const mongoose =require('mongoose')
const RoomScheme=new mongoose.Schema({ 

TypeRoom:{type:String},
Category:{type:String},
Prix:{type:Number},
Description:{type:String},
productImage:{type:String},

   })
   module.exports=mongoose.model('Room',RoomScheme)