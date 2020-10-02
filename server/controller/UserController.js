const User = require('../Model/UserModel')
const bcrypt= require('bcrypt')
const jwt=require('jsonwebtoken')

exports.SignIn=(req,res)=>{
    User.find({Email:req.body.Email})
.then (user =>{if (user.length>=1)
return  res.status(409).json({

message:'mail exist'})


else {bcrypt.hash(req.body.Passeword,10,(er,hash) => {
if (er) {return res.send(er)}
else {
    const newUser = new User ({
Email: req.body.Email,
Passeword:hash
  }).save()
  .then (data => res.status(200).json({message:"user added"}))
  .catch (er=>console.log(er))




}



}
    
    
    )
}})}






exports.login =(req,res)=>{

    console.log(req.body)
User.find({Email:req.body.Email})
.then(user => {if (user.length<1){
return res.status(409).json({ message:"auth failed"})


}
else{

bcrypt.compare(req.body.Passeword,user[0].Passeword,(er,result)=>{

    if(er){return res.status(400).json({message:"auth failed"})}

else { const token=jwt.sign({
Email:user[0].Email,
UserId:user[0]._id},"secret")
return res.status(200).json({
    token:token,
    message:'success',
    userid:user[0]._id
})

}})}})}
































