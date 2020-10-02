const Room = require('../Model/RoomModel')
exports.create=(req,res)=>{
    // console.log(req.body)
    const newRoom=new Room({
TypeRoom:req.body.TypeRoom,
Category:req.body.Category,
Prix:req.body.Prix,
Description:req.body.Description,
productImage:req.file.originalname
})
newRoom.save()
.then(result=>res.send(result))
.catch(er=>console.log(er))

}


exports.FindRoom=(req,res) =>{
   
    Room.find()
    .then(result=>res.send(result))
    .catch(er=>console.log(er))
}

exports.updateRoom=(req,res)=>{
    let id=req.params.RoomId

Room.findByIdAndUpdate({_id:id},req.body)
.then(result=>res.status(200).json({message:" room up"}))
.catch(er => console.log(er))

}



exports.deleteRoom=(req,res)=>{let id=req.params.RoomId

    Room.findByIdAndDelete({_id:id},req.body)
    .then(result=>res.status(200).json({message:" room del"}))
    .catch(er => console.log(er))
    
    }