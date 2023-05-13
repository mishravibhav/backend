// const AppError = require('../utills/appError')


// apply restricting to specific members
module.exports = (...access) => {
  
  return (req, res, next) => {
    // console.log("access--->",access)
    // console.log("req.user.access--->",req.user.access)
    if (!req.user.access.includes(access[0])) {
      return res.status(403).json({
        status: 'success',
        results: "you do not have sufficient permission to access this service",
      })
    }
    next();
  };
};
