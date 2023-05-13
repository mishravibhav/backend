const catchAsync = require('../utills/catchAsync');

exports.userOverview = catchAsync(async (req, res, next) => {
    return res.status(200).json({
        success: true,
        response: "This is overview route" ,
      });
})

exports.createUser = catchAsync(async (req, res, next) => {
    return res.status(200).json({
        success: true,
        response: "This is creteuser route" ,
      });
})

exports.resetPassword = catchAsync(async (req, res, next) => {
    return res.status(200).json({
        success: true,
        response: "This is resetPassword route" ,
      });
})

exports.userList = catchAsync(async (req, res, next) => {
    return res.status(200).json({
        success: true,
        response: "This is listUser route" ,
      });
})