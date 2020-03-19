"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _walletData = _interopRequireDefault(require("../db/walletData.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/', (req, res) => {
  try {
    // console.log(productData)
    res.send(_walletData.default);
  } catch (error) {
    console.log('walletData');
  }
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvd2FsbGV0LmpzIl0sIm5hbWVzIjpbInJvdXRlciIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJ3YWxsZXREYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsc0JBQWY7QUFFQUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsR0FBWCxFQUFnQixDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUM1QixNQUFJO0FBQ0Y7QUFDQUEsSUFBQUEsR0FBRyxDQUFDQyxJQUFKLENBQVNDLG1CQUFUO0FBQ0QsR0FIRCxDQUdFLE9BQU9DLEtBQVAsRUFBYztBQUNkQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0Q7QUFDRixDQVBEO2VBU2VSLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlcn0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgd2FsbGV0RGF0YSBmcm9tICcuLi9kYi93YWxsZXREYXRhLmpzb24nXG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXG5cbnJvdXRlci5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0RGF0YSlcbiAgICByZXMuc2VuZCh3YWxsZXREYXRhKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCd3YWxsZXREYXRhJylcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdfQ==