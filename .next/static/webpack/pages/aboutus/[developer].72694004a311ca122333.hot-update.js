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
  var developerdetails = details.find(function (dev) {
    dev.id === id;
  });

  if (developerdetails) {
    setdeveloper(developerdetails);
  }

  if (!developerdetails) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Developer doesn't exist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: developer.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: developer.role
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy9bZGV2ZWxvcGVyXS5qcyJdLCJuYW1lcyI6WyJkZXZlbG9wZXIiLCJ1c2VTdGF0ZSIsInNldGRldmVsb3BlciIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicGFyc2VJbnQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWxzIiwibmFtZSIsInJvbGUiLCJkZXZlbG9wZXJkZXRhaWxzIiwiZmluZCIsImRldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUNpQkMsK0NBQVEsRUFEekI7QUFBQSxNQUNWRCxTQURVO0FBQUEsTUFDQ0UsWUFERDs7QUFFakIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDSCxNQUFNLENBQUNJLEtBQVAsQ0FBYVAsU0FBZCxDQUFuQjtBQUVBUSxTQUFPLENBQUNDLEdBQVIsQ0FBWUosRUFBWjtBQUVBLE1BQU1LLE9BQU8sR0FBRyxDQUNaO0FBQUVMLE1BQUUsRUFBRyxDQUFQO0FBQVVNLFFBQUksRUFBRSxNQUFoQjtBQUF3QkMsUUFBSSxFQUFFO0FBQTlCLEdBRFksRUFFWjtBQUFFUCxNQUFFLEVBQUcsQ0FBUDtBQUFVTSxRQUFJLEVBQUUsU0FBaEI7QUFBMkJDLFFBQUksRUFBRTtBQUFqQyxHQUZZLEVBR1o7QUFBRVAsTUFBRSxFQUFHLENBQVA7QUFBVU0sUUFBSSxFQUFFLFFBQWhCO0FBQTBCQyxRQUFJLEVBQUU7QUFBaEMsR0FIWSxDQUFoQjtBQU1BLE1BQU1DLGdCQUFnQixHQUFHSCxPQUFPLENBQUNJLElBQVIsQ0FBYSxVQUFBQyxHQUFHLEVBQUU7QUFDdkNBLE9BQUcsQ0FBQ1YsRUFBSixLQUFXQSxFQUFYO0FBQ0gsR0FGd0IsQ0FBekI7O0FBR0EsTUFBR1EsZ0JBQUgsRUFBb0I7QUFDaEJYLGdCQUFZLENBQUNXLGdCQUFELENBQVo7QUFDSDs7QUFFRCxNQUFHLENBQUNBLGdCQUFKLEVBQXFCO0FBQ2pCLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDSDs7QUFJRCxzQkFBTztBQUFBLDRCQUNQO0FBQUEsZ0JBQUtiLFNBQVMsQ0FBQ1c7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE8sZUFFUDtBQUFBLGdCQUFJWCxTQUFTLENBQUNZO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBSUg7O0dBOUJRWixTO1VBRVVJLGtEOzs7QUE4Qm5CLCtEQUFlSixTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0dXMvW2RldmVsb3Blcl0uNzI2OTQwMDRhMzExY2ExMjIzMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIGRldmVsb3BlciAoKXtcclxuICAgIGNvbnN0IFtkZXZlbG9wZXIsIHNldGRldmVsb3Blcl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBpZCA9IHBhcnNlSW50KHJvdXRlci5xdWVyeS5kZXZlbG9wZXIpXHJcblxyXG4gICAgY29uc29sZS5sb2coaWQpXHJcblxyXG4gICAgY29uc3QgZGV0YWlscyA9IFtcclxuICAgICAgICB7IGlkIDogMSwgbmFtZTogJ1lhc2gnLCByb2xlOiAnU2VuaW9yIERldmVsb3Blcid9LFxyXG4gICAgICAgIHsgaWQgOiAyLCBuYW1lOiAnVmFpYmhhdicsIHJvbGU6ICdCYWNrZW5kIERldmVsb3Blcid9LFxyXG4gICAgICAgIHsgaWQgOiAzLCBuYW1lOiAnU3VyZXNoJywgcm9sZTogJ0Zyb250ZW5kIERldmVsb3Blcid9XHJcbiAgICAgICAgXVxyXG5cclxuICAgIGNvbnN0IGRldmVsb3BlcmRldGFpbHMgPSBkZXRhaWxzLmZpbmQoZGV2PT57XHJcbiAgICAgICAgZGV2LmlkID09PSBpZCBcclxuICAgIH0pXHJcbiAgICBpZihkZXZlbG9wZXJkZXRhaWxzKXtcclxuICAgICAgICBzZXRkZXZlbG9wZXIoZGV2ZWxvcGVyZGV0YWlscylcclxuICAgIH1cclxuXHJcbiAgICBpZighZGV2ZWxvcGVyZGV0YWlscyl7XHJcbiAgICAgICAgcmV0dXJuIDxoMT5EZXZlbG9wZXIgZG9lc24ndCBleGlzdDwvaDE+O1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgPGgxPntkZXZlbG9wZXIubmFtZX08L2gxPlxyXG4gICAgPHA+e2RldmVsb3Blci5yb2xlfTwvcD5cclxuPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRldmVsb3BlcjsiXSwic291cmNlUm9vdCI6IiJ9