// const jwt = require("jsonwebtoken");
const catchAsync = require('../utills/catchAsync');
const checkAuth = require('../modules/user.auth')


module.exports = catchAsync(async (req, res, next) => {

  try {
    const token = req.headers["token"];

    if (!token) {
      return res.status(403).json({success:true,message:"token is required for authentication"});
    }

      const USER = await checkAuth(token).then((r)=>{
        console.log(r)
        return r
    })

        req.user = USER
      
  } catch (err) {
    // console.log(err)
    return res.status(401).json({success:true,message:"Invalid Token"});
  }
  return next();
});