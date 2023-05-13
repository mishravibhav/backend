// const AppError = require('../utills/appError')


// apply restricting to specific members
module.exports = (...role) => {
  //  roles is an array like ['admin','lead-guide'] using res-parameter syntax
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      return res.status(403).json({
        status: 'success',
        results: "user do not have sufficient permission to perform this action",
      })
    }
    next();
  };
};
