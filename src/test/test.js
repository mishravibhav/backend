const checkAuth = require('../modules/user.auth')

const tester = async ()=>{
    const res = await checkAuth("sdfsf479076qji$^%$").then((r)=>{
        console.log(r)
    }).catch((e)=>{
        console.log(e)
    })
}

tester()