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
      developername = _useState[0],
      setdevelopername = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var id = parseInt(router.query.developer);
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
  var developer = details.find(function (dev) {
    dev.id === id;
  });

  if (!developer) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Developer doesn't exist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: developer.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: developer.role
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 12
  }, this);
}

_s(developer, "5vvaZTFyESpyh0hCo/p2FHMcJJA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy9bZGV2ZWxvcGVyXS5qcyJdLCJuYW1lcyI6WyJkZXZlbG9wZXIiLCJ1c2VTdGF0ZSIsImRldmVsb3Blcm5hbWUiLCJzZXRkZXZlbG9wZXJuYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJwYXJzZUludCIsInF1ZXJ5IiwiZGV0YWlscyIsIm5hbWUiLCJyb2xlIiwiZmluZCIsImRldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUMwQkMsK0NBQVEsRUFEbEM7QUFBQSxNQUNWQyxhQURVO0FBQUEsTUFDTUMsZ0JBRE47O0FBRWpCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDSSxLQUFQLENBQWFSLFNBQWQsQ0FBbkI7QUFFQSxNQUFNUyxPQUFPLEdBQUcsQ0FDWjtBQUFFSCxNQUFFLEVBQUcsQ0FBUDtBQUFVSSxRQUFJLEVBQUUsTUFBaEI7QUFBd0JDLFFBQUksRUFBRTtBQUE5QixHQURZLEVBRVo7QUFBRUwsTUFBRSxFQUFHLENBQVA7QUFBVUksUUFBSSxFQUFFLFNBQWhCO0FBQTJCQyxRQUFJLEVBQUU7QUFBakMsR0FGWSxFQUdaO0FBQUVMLE1BQUUsRUFBRyxDQUFQO0FBQVVJLFFBQUksRUFBRSxRQUFoQjtBQUEwQkMsUUFBSSxFQUFFO0FBQWhDLEdBSFksQ0FBaEI7QUFNQSxNQUFNWCxTQUFTLEdBQUdTLE9BQU8sQ0FBQ0csSUFBUixDQUFhLFVBQUFDLEdBQUcsRUFBRTtBQUNoQ0EsT0FBRyxDQUFDUCxFQUFKLEtBQVdBLEVBQVg7QUFDSCxHQUZpQixDQUFsQjs7QUFJQSxNQUFHLENBQUNOLFNBQUosRUFBYztBQUNWLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDSDs7QUFJRCxzQkFBTztBQUFBLDRCQUNQO0FBQUEsZ0JBQUtBLFNBQVMsQ0FBQ1U7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE8sZUFFUDtBQUFBLGdCQUFJVixTQUFTLENBQUNXO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBSUg7O0dBekJRWCxTO1VBRVVLLGtEOzs7QUF5Qm5CLCtEQUFlTCxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0dXMvW2RldmVsb3Blcl0uMjQxMjJkZTcwY2I0YjFlMWI0M2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIGRldmVsb3BlciAoKXtcclxuICAgIGNvbnN0IFtkZXZlbG9wZXJuYW1lICwgc2V0ZGV2ZWxvcGVybmFtZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBpZCA9IHBhcnNlSW50KHJvdXRlci5xdWVyeS5kZXZlbG9wZXIpXHJcblxyXG4gICAgY29uc3QgZGV0YWlscyA9IFtcclxuICAgICAgICB7IGlkIDogMSwgbmFtZTogJ1lhc2gnLCByb2xlOiAnU2VuaW9yIERldmVsb3Blcid9LFxyXG4gICAgICAgIHsgaWQgOiAyLCBuYW1lOiAnVmFpYmhhdicsIHJvbGU6ICdCYWNrZW5kIERldmVsb3Blcid9LFxyXG4gICAgICAgIHsgaWQgOiAzLCBuYW1lOiAnU3VyZXNoJywgcm9sZTogJ0Zyb250ZW5kIERldmVsb3Blcid9XHJcbiAgICAgICAgXVxyXG5cclxuICAgIGNvbnN0IGRldmVsb3BlciA9IGRldGFpbHMuZmluZChkZXY9PntcclxuICAgICAgICBkZXYuaWQgPT09IGlkIFxyXG4gICAgfSlcclxuXHJcbiAgICBpZighZGV2ZWxvcGVyKXtcclxuICAgICAgICByZXR1cm4gPGgxPkRldmVsb3BlciBkb2Vzbid0IGV4aXN0PC9oMT47XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICA8aDE+e2RldmVsb3Blci5uYW1lfTwvaDE+XHJcbiAgICA8cD57ZGV2ZWxvcGVyLnJvbGV9PC9wPlxyXG48L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGV2ZWxvcGVyOyJdLCJzb3VyY2VSb290IjoiIn0=