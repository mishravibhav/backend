const users = require('../temp/users.json')

const checkAuth = (token)=>{
    return new Promise((resolve,reject)=>{
        const foundUser = users.find(u => u.password === token)
        !foundUser ? reject("user not found") : resolve(foundUser)
    })
}

module.exports = checkAuth
