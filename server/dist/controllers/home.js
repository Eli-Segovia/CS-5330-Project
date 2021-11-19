"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = void 0;

// @desc    Test endpoint
// @route   GET /
// @access  Public
var test = function test(req, res, next) {
  res.status(200).json({
    sucess: true,
    msg: 'Some thing happened'
  });
};

exports.test = test;