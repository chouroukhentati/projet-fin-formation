const User = require('../controller/UserController')

module.exports=(app) => {
 app.post('/SignIn',User.SignIn)
 app.post('/login',User.login)
}