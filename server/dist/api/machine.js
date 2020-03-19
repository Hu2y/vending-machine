"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _productData = _interopRequireDefault(require("../db/productData.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/', (req, res) => {
  try {
    // console.log(productData)
    res.send(_productData.default);
  } catch (error) {
    console.log('productData');
  }
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvbWFjaGluZS5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJzZW5kIiwicHJvZHVjdERhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLE1BQU1BLE1BQU0sR0FBRyxzQkFBZjtBQUVBQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxHQUFYLEVBQWdCLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzVCLE1BQUk7QUFDRjtBQUNBQSxJQUFBQSxHQUFHLENBQUNDLElBQUosQ0FBU0Msb0JBQVQ7QUFDRCxHQUhELENBR0UsT0FBT0MsS0FBUCxFQUFjO0FBQ2RDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDRDtBQUNGLENBUEQ7ZUFTZVIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBwcm9kdWN0RGF0YSBmcm9tICcuLi9kYi9wcm9kdWN0RGF0YS5qc29uJ1xuXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxuXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gY29uc29sZS5sb2cocHJvZHVjdERhdGEpXG4gICAgcmVzLnNlbmQocHJvZHVjdERhdGEpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ3Byb2R1Y3REYXRhJylcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdfQ==