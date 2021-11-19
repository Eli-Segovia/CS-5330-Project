"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _home = _interopRequireDefault(require("./routes/home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// load dev env vars
if (process.env.NODE_ENV !== 'production') {
  _dotenv["default"].config({
    path: '../config/.env'
  });
}

var app = (0, _express["default"])(); // Mount routers

app.use('/', _home["default"]);
app.listen(process.env.PORT || 5000, function () {
  console.log("Server running on port ".concat(process.env.PORT || 5000));
});