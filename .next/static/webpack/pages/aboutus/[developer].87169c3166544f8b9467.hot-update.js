self["webpackHotUpdate_N_E"]("pages/aboutus/[developer]",{

/***/ "./pages/aboutus/[developer].js":
/*!**************************************!*\
  !*** ./pages/aboutus/[developer].js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Jaganathan V\\Documents\\React Projects\\next js\\pages\\aboutus\\[developer].js",
    _s = $RefreshSig$();




function developer() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      developer = _useState[0],
      setdeveloper = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var id = parseInt(router.query.developer);
  console.log(id);
  var details = [{
    id: 1,
    name: 'Yash',
    role: 'Senior Developer'
  }, {
    id: 2,
    name: 'Vaibhav',
    role: 'Backend Developer'
  }, {
    id: 3,
    name: 'Suresh',
    role: 'Frontend Developer'
  }];
  var Developer;
  details.forEach(function (dev) {
    if (dev.id === id) {
      Developer = dev;
    }
  });
  console.log(Developer);

  if (!Developer) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Developer doesn't exist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: Developer.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: Developer.role
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 12
  }, this);
}

_s(developer, "5EJ4JWOE1iI6riPlDvlqy4Jz69k=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

/* harmony default export */ __webpack_exports__["default"] = (developer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy9bZGV2ZWxvcGVyXS5qcyJdLCJuYW1lcyI6WyJkZXZlbG9wZXIiLCJ1c2VTdGF0ZSIsInNldGRldmVsb3BlciIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicGFyc2VJbnQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWxzIiwibmFtZSIsInJvbGUiLCJEZXZlbG9wZXIiLCJmb3JFYWNoIiwiZGV2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ2lCQywrQ0FBUSxFQUR6QjtBQUFBLE1BQ1ZELFNBRFU7QUFBQSxNQUNDRSxZQUREOztBQUVqQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsTUFBTUMsRUFBRSxHQUFHQyxRQUFRLENBQUNILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhUCxTQUFkLENBQW5CO0FBRUFRLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixFQUFaO0FBRUEsTUFBTUssT0FBTyxHQUFHLENBQ1o7QUFBRUwsTUFBRSxFQUFHLENBQVA7QUFBVU0sUUFBSSxFQUFFLE1BQWhCO0FBQXdCQyxRQUFJLEVBQUU7QUFBOUIsR0FEWSxFQUVaO0FBQUVQLE1BQUUsRUFBRyxDQUFQO0FBQVVNLFFBQUksRUFBRSxTQUFoQjtBQUEyQkMsUUFBSSxFQUFFO0FBQWpDLEdBRlksRUFHWjtBQUFFUCxNQUFFLEVBQUcsQ0FBUDtBQUFVTSxRQUFJLEVBQUUsUUFBaEI7QUFBMEJDLFFBQUksRUFBRTtBQUFoQyxHQUhZLENBQWhCO0FBS0osTUFBSUMsU0FBSjtBQUNJSCxTQUFPLENBQUNJLE9BQVIsQ0FBZ0IsVUFBQUMsR0FBRyxFQUFFO0FBRWpCLFFBQUdBLEdBQUcsQ0FBQ1YsRUFBSixLQUFXQSxFQUFkLEVBQWlCO0FBQ2JRLGVBQVMsR0FBR0UsR0FBWjtBQUNIO0FBQ0osR0FMRDtBQU9BUCxTQUFPLENBQUNDLEdBQVIsQ0FBWUksU0FBWjs7QUFHQSxNQUFHLENBQUNBLFNBQUosRUFBYztBQUNWLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDSDs7QUFJRCxzQkFBTztBQUFBLDRCQUNQO0FBQUEsZ0JBQUtBLFNBQVMsQ0FBQ0Y7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE8sZUFFUDtBQUFBLGdCQUFJRSxTQUFTLENBQUNEO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBSUg7O0dBbENRWixTO1VBRVVJLGtEOzs7QUFrQ25CLCtEQUFlSixTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0dXMvW2RldmVsb3Blcl0uODcxNjljMzE2NjU0NGY4Yjk0NjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIGRldmVsb3BlciAoKXtcclxuICAgIGNvbnN0IFtkZXZlbG9wZXIsIHNldGRldmVsb3Blcl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGlkID0gcGFyc2VJbnQocm91dGVyLnF1ZXJ5LmRldmVsb3BlcilcclxuXHJcbiAgICBjb25zb2xlLmxvZyhpZClcclxuXHJcbiAgICBjb25zdCBkZXRhaWxzID0gW1xyXG4gICAgICAgIHsgaWQgOiAxLCBuYW1lOiAnWWFzaCcsIHJvbGU6ICdTZW5pb3IgRGV2ZWxvcGVyJ30sXHJcbiAgICAgICAgeyBpZCA6IDIsIG5hbWU6ICdWYWliaGF2Jywgcm9sZTogJ0JhY2tlbmQgRGV2ZWxvcGVyJ30sXHJcbiAgICAgICAgeyBpZCA6IDMsIG5hbWU6ICdTdXJlc2gnLCByb2xlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyJ31cclxuICAgICAgICBdXHJcbmxldCBEZXZlbG9wZXI7XHJcbiAgICBkZXRhaWxzLmZvckVhY2goZGV2PT57XHJcblxyXG4gICAgICAgIGlmKGRldi5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICBEZXZlbG9wZXIgPSBkZXZcclxuICAgICAgICB9IFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhEZXZlbG9wZXIpXHJcbiAgICBcclxuXHJcbiAgICBpZighRGV2ZWxvcGVyKXtcclxuICAgICAgICByZXR1cm4gPGgxPkRldmVsb3BlciBkb2Vzbid0IGV4aXN0PC9oMT47XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICA8aDE+e0RldmVsb3Blci5uYW1lfTwvaDE+XHJcbiAgICA8cD57RGV2ZWxvcGVyLnJvbGV9PC9wPlxyXG48L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGV2ZWxvcGVyOyJdLCJzb3VyY2VSb290IjoiIn0=