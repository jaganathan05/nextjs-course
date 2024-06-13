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
  var Developer = details.find(function (dev) {
    dev.id === id;
  });

  if (!Developer) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Developer doesn't exist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: Developer.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: Developer.role
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy9bZGV2ZWxvcGVyXS5qcyJdLCJuYW1lcyI6WyJkZXZlbG9wZXIiLCJ1c2VTdGF0ZSIsInNldGRldmVsb3BlciIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicGFyc2VJbnQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWxzIiwibmFtZSIsInJvbGUiLCJEZXZlbG9wZXIiLCJmaW5kIiwiZGV2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ2lCQywrQ0FBUSxFQUR6QjtBQUFBLE1BQ1ZELFNBRFU7QUFBQSxNQUNDRSxZQUREOztBQUVqQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsTUFBTUMsRUFBRSxHQUFHQyxRQUFRLENBQUNILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhUCxTQUFkLENBQW5CO0FBRUFRLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixFQUFaO0FBRUEsTUFBTUssT0FBTyxHQUFHLENBQ1o7QUFBRUwsTUFBRSxFQUFHLENBQVA7QUFBVU0sUUFBSSxFQUFFLE1BQWhCO0FBQXdCQyxRQUFJLEVBQUU7QUFBOUIsR0FEWSxFQUVaO0FBQUVQLE1BQUUsRUFBRyxDQUFQO0FBQVVNLFFBQUksRUFBRSxTQUFoQjtBQUEyQkMsUUFBSSxFQUFFO0FBQWpDLEdBRlksRUFHWjtBQUFFUCxNQUFFLEVBQUcsQ0FBUDtBQUFVTSxRQUFJLEVBQUUsUUFBaEI7QUFBMEJDLFFBQUksRUFBRTtBQUFoQyxHQUhZLENBQWhCO0FBTUEsTUFBTUMsU0FBUyxHQUFHSCxPQUFPLENBQUNJLElBQVIsQ0FBYSxVQUFBQyxHQUFHLEVBQUU7QUFDaENBLE9BQUcsQ0FBQ1YsRUFBSixLQUFXQSxFQUFYO0FBQ0gsR0FGaUIsQ0FBbEI7O0FBS0EsTUFBRyxDQUFDUSxTQUFKLEVBQWM7QUFDVix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0g7O0FBSUQsc0JBQU87QUFBQSw0QkFDUDtBQUFBLGdCQUFLQSxTQUFTLENBQUNGO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURPLGVBRVA7QUFBQSxnQkFBSUUsU0FBUyxDQUFDRDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUlIOztHQTdCUVosUztVQUVVSSxrRDs7O0FBNkJuQiwrREFBZUosU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dHVzL1tkZXZlbG9wZXJdLjAyYmZkZmIyMzM0M2E5MWRjZWUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBkZXZlbG9wZXIgKCl7XHJcbiAgICBjb25zdCBbZGV2ZWxvcGVyLCBzZXRkZXZlbG9wZXJdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgXHJcbiAgICBjb25zdCBpZCA9IHBhcnNlSW50KHJvdXRlci5xdWVyeS5kZXZlbG9wZXIpXHJcblxyXG4gICAgY29uc29sZS5sb2coaWQpXHJcblxyXG4gICAgY29uc3QgZGV0YWlscyA9IFtcclxuICAgICAgICB7IGlkIDogMSwgbmFtZTogJ1lhc2gnLCByb2xlOiAnU2VuaW9yIERldmVsb3Blcid9LFxyXG4gICAgICAgIHsgaWQgOiAyLCBuYW1lOiAnVmFpYmhhdicsIHJvbGU6ICdCYWNrZW5kIERldmVsb3Blcid9LFxyXG4gICAgICAgIHsgaWQgOiAzLCBuYW1lOiAnU3VyZXNoJywgcm9sZTogJ0Zyb250ZW5kIERldmVsb3Blcid9XHJcbiAgICAgICAgXVxyXG5cclxuICAgIGNvbnN0IERldmVsb3BlciA9IGRldGFpbHMuZmluZChkZXY9PntcclxuICAgICAgICBkZXYuaWQgPT09IGlkIFxyXG4gICAgfSlcclxuICAgIFxyXG5cclxuICAgIGlmKCFEZXZlbG9wZXIpe1xyXG4gICAgICAgIHJldHVybiA8aDE+RGV2ZWxvcGVyIGRvZXNuJ3QgZXhpc3Q8L2gxPjtcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgIDxoMT57RGV2ZWxvcGVyLm5hbWV9PC9oMT5cclxuICAgIDxwPntEZXZlbG9wZXIucm9sZX08L3A+XHJcbjwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZXZlbG9wZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==