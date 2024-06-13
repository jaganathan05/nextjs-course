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




function Developer() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      developer = _useState[0],
      setDeveloper = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var id = router.query.id;
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
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (id) {
      var developerId = parseInt(id);
      var developerdetails = details.find(function (dev) {
        return dev.id === developerId;
      });
      console.log(developerdetails);
      setDeveloper(developerdetails || null);
    }
  }, [id]);
  console.log(developer);

  if (developer === null) {
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
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: developer.role
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

_s(Developer, "jUy8C5I7ylP8PARmzvOcAzBWGyc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Developer;
/* harmony default export */ __webpack_exports__["default"] = (Developer);

var _c;

$RefreshReg$(_c, "Developer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy9bZGV2ZWxvcGVyXS5qcyJdLCJuYW1lcyI6WyJEZXZlbG9wZXIiLCJ1c2VTdGF0ZSIsImRldmVsb3BlciIsInNldERldmVsb3BlciIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJkZXRhaWxzIiwibmFtZSIsInJvbGUiLCJ1c2VFZmZlY3QiLCJkZXZlbG9wZXJJZCIsInBhcnNlSW50IiwiZGV2ZWxvcGVyZGV0YWlscyIsImZpbmQiLCJkZXYiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ2lCQywrQ0FBUSxDQUFDLElBQUQsQ0FEekI7QUFBQSxNQUNWQyxTQURVO0FBQUEsTUFDQ0MsWUFERDs7QUFFakIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUZpQixNQUdUQyxFQUhTLEdBR0ZGLE1BQU0sQ0FBQ0csS0FITCxDQUdURCxFQUhTO0FBS2pCLE1BQU1FLE9BQU8sR0FBRyxDQUNaO0FBQUVGLE1BQUUsRUFBRSxDQUFOO0FBQVNHLFFBQUksRUFBRSxNQUFmO0FBQXVCQyxRQUFJLEVBQUU7QUFBN0IsR0FEWSxFQUVaO0FBQUVKLE1BQUUsRUFBRSxDQUFOO0FBQVNHLFFBQUksRUFBRSxTQUFmO0FBQTBCQyxRQUFJLEVBQUU7QUFBaEMsR0FGWSxFQUdaO0FBQUVKLE1BQUUsRUFBRSxDQUFOO0FBQVNHLFFBQUksRUFBRSxRQUFmO0FBQXlCQyxRQUFJLEVBQUU7QUFBL0IsR0FIWSxDQUFoQjtBQU1BQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFJTCxFQUFKLEVBQVE7QUFDSixVQUFNTSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1AsRUFBRCxDQUE1QjtBQUNBLFVBQU1RLGdCQUFnQixHQUFHTixPQUFPLENBQUNPLElBQVIsQ0FBYSxVQUFBQyxHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDVixFQUFKLEtBQVdNLFdBQWY7QUFBQSxPQUFoQixDQUF6QjtBQUNBSyxhQUFPLENBQUNDLEdBQVIsQ0FBWUosZ0JBQVo7QUFDQVgsa0JBQVksQ0FBQ1csZ0JBQWdCLElBQUksSUFBckIsQ0FBWjtBQUNIO0FBQ0osR0FQUSxFQU9OLENBQUNSLEVBQUQsQ0FQTSxDQUFUO0FBUUpXLFNBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsU0FBWjs7QUFDSSxNQUFJQSxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDcEIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNIOztBQUVELHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSxnQkFBS0EsU0FBUyxDQUFDTztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsZ0JBQUlQLFNBQVMsQ0FBQ1E7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7R0E5QlFWLFM7VUFFVUssa0Q7OztLQUZWTCxTO0FBZ0NULCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0dXMvW2RldmVsb3Blcl0uOTlmYTM3ZGNlMDM2MjdkMDEwOTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIERldmVsb3BlcigpIHtcclxuICAgIGNvbnN0IFtkZXZlbG9wZXIsIHNldERldmVsb3Blcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IGRldGFpbHMgPSBbXHJcbiAgICAgICAgeyBpZDogMSwgbmFtZTogJ1lhc2gnLCByb2xlOiAnU2VuaW9yIERldmVsb3BlcicgfSxcclxuICAgICAgICB7IGlkOiAyLCBuYW1lOiAnVmFpYmhhdicsIHJvbGU6ICdCYWNrZW5kIERldmVsb3BlcicgfSxcclxuICAgICAgICB7IGlkOiAzLCBuYW1lOiAnU3VyZXNoJywgcm9sZTogJ0Zyb250ZW5kIERldmVsb3BlcicgfVxyXG4gICAgXTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZXZlbG9wZXJJZCA9IHBhcnNlSW50KGlkKTtcclxuICAgICAgICAgICAgY29uc3QgZGV2ZWxvcGVyZGV0YWlscyA9IGRldGFpbHMuZmluZChkZXYgPT4gZGV2LmlkID09PSBkZXZlbG9wZXJJZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRldmVsb3BlcmRldGFpbHMpXHJcbiAgICAgICAgICAgIHNldERldmVsb3BlcihkZXZlbG9wZXJkZXRhaWxzIHx8IG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpZF0pO1xyXG5jb25zb2xlLmxvZyhkZXZlbG9wZXIpXHJcbiAgICBpZiAoZGV2ZWxvcGVyID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIDxoMT5EZXZlbG9wZXIgZG9lc24ndCBleGlzdDwvaDE+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPntkZXZlbG9wZXIubmFtZX08L2gxPlxyXG4gICAgICAgICAgICA8cD57ZGV2ZWxvcGVyLnJvbGV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV2ZWxvcGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9