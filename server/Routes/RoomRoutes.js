const Room = require('../controller/RoomController')

module.exports=(app) => {
const multer = require('multer')
const Storage = multer.diskStorage
({destination:(res,file,cb)=>
    {cb(null,'../projet/public/image')},
  filename:  (res,file,cb)=>
  {cb(null,file.originalname)}
})
const upload=multer({
    storage:Storage
})
app.post('/create',upload.single('productImage'),Room.create),
app.get('/findRoom',Room.FindRoom)
app.put('/updateRoom/:RoomId',Room.updateRoom)
app.delete('/deleteRoom/:RoomId',Room.deleteRoom)
}