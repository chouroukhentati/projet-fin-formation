const express=require('express')
const mongoose =require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
require('dotenv').config()
const app = express()
app.use(cors())

mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology: true, useNewUrlParser: true},er=> {if(er)console.log(er)
    else console.log('db connected')}) 
    mongoose.set('useFindAndModify', false);
 
 const RoomRoutes= require('./Routes/RoomRoutes')
 app.use(bodyParser.json())
RoomRoutes(app)



const UserRoutes= require('./Routes/UserRoutes')

UserRoutes(app)




app.listen(4000,er=> {if(er)console.log(er)
else console.log('serveur connected au port 4000')})

// const basicAuth = require('express-basic-auth');

// const auth = basicAuth({
//   users: {
//     admin: '123',
//     user: '456',
//   },
// });


// app.get('/authenticate', auth, (req, res) => {
//     if (req.auth.Email === 'admin') {
//       res.send('admin');
//     } else if (req.auth.Email === 'user') {
//       res.send('user');
//     }
//   });