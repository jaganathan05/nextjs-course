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
/* harmony import */ var C_Users_Jaganathan_V_Documents_React_Projects_next_js_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jaganathan_V_Documents_React_Projects_next_js_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jaganathan_V_Documents_React_Projects_next_js_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Jaganathan_V_Documents_React_Projects_next_js_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Jaganathan V\\Documents\\React Projects\\next js\\pages\\aboutus\\[developer].js",
    _s = $RefreshSig$();




function developer() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      developer = _useState[0],
      setdeveloper = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var id;

  var fetchquery = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Jaganathan_V_Documents_React_Projects_next_js_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Jaganathan_V_Documents_React_Projects_next_js_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return C_Users_Jaganathan_V_Documents_React_Projects_next_js_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parseInt(router.query.developer);

            case 2:
              id = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchquery() {
      return _ref.apply(this, arguments);
    };
  }();

  fetchquery();
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
      lineNumber: 30,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: developer.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: developer.role
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 12
  }, this);
}

_s(developer, "5EJ4JWOE1iI6riPlDvlqy4Jz69k=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy9bZGV2ZWxvcGVyXS5qcyJdLCJuYW1lcyI6WyJkZXZlbG9wZXIiLCJ1c2VTdGF0ZSIsInNldGRldmVsb3BlciIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwiZmV0Y2hxdWVyeSIsInBhcnNlSW50IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlscyIsIm5hbWUiLCJyb2xlIiwiZGV2ZWxvcGVyZGV0YWlscyIsImZpbmQiLCJkZXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUNpQkMsK0NBQVEsRUFEekI7QUFBQSxNQUNWRCxTQURVO0FBQUEsTUFDQ0UsWUFERDs7QUFFakIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNKLE1BQUlDLEVBQUo7O0FBQ0ksTUFBTUMsVUFBVTtBQUFBLDZUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNIQyxRQUFRLENBQUNKLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhUixTQUFkLENBREw7O0FBQUE7QUFDZEssZ0JBRGM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVkMsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFHQUEsWUFBVTtBQUdWRyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsRUFBWjtBQUVBLE1BQU1NLE9BQU8sR0FBRyxDQUNaO0FBQUVOLE1BQUUsRUFBRyxDQUFQO0FBQVVPLFFBQUksRUFBRSxNQUFoQjtBQUF3QkMsUUFBSSxFQUFFO0FBQTlCLEdBRFksRUFFWjtBQUFFUixNQUFFLEVBQUcsQ0FBUDtBQUFVTyxRQUFJLEVBQUUsU0FBaEI7QUFBMkJDLFFBQUksRUFBRTtBQUFqQyxHQUZZLEVBR1o7QUFBRVIsTUFBRSxFQUFHLENBQVA7QUFBVU8sUUFBSSxFQUFFLFFBQWhCO0FBQTBCQyxRQUFJLEVBQUU7QUFBaEMsR0FIWSxDQUFoQjtBQU1BLE1BQU1DLGdCQUFnQixHQUFHSCxPQUFPLENBQUNJLElBQVIsQ0FBYSxVQUFBQyxHQUFHLEVBQUU7QUFDdkNBLE9BQUcsQ0FBQ1gsRUFBSixLQUFXQSxFQUFYO0FBQ0gsR0FGd0IsQ0FBekI7O0FBR0EsTUFBR1MsZ0JBQUgsRUFBb0I7QUFDaEJaLGdCQUFZLENBQUNZLGdCQUFELENBQVo7QUFDSDs7QUFFRCxNQUFHLENBQUNBLGdCQUFKLEVBQXFCO0FBQ2pCLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDSDs7QUFJRCxzQkFBTztBQUFBLDRCQUNQO0FBQUEsZ0JBQUtkLFNBQVMsQ0FBQ1k7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE8sZUFFUDtBQUFBLGdCQUFJWixTQUFTLENBQUNhO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBSUg7O0dBbkNRYixTO1VBRVVJLGtEOzs7QUFtQ25CLCtEQUFlSixTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0dXMvW2RldmVsb3Blcl0uNmM2NzI1MDkzMTA5OGU0ZWFmN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIGRldmVsb3BlciAoKXtcclxuICAgIGNvbnN0IFtkZXZlbG9wZXIsIHNldGRldmVsb3Blcl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbmxldCBpZDtcclxuICAgIGNvbnN0IGZldGNocXVlcnkgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgICBpZCA9IGF3YWl0IHBhcnNlSW50KHJvdXRlci5xdWVyeS5kZXZlbG9wZXIpXHJcbiAgICB9XHJcbiAgICBmZXRjaHF1ZXJ5KClcclxuICAgIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKGlkKVxyXG5cclxuICAgIGNvbnN0IGRldGFpbHMgPSBbXHJcbiAgICAgICAgeyBpZCA6IDEsIG5hbWU6ICdZYXNoJywgcm9sZTogJ1NlbmlvciBEZXZlbG9wZXInfSxcclxuICAgICAgICB7IGlkIDogMiwgbmFtZTogJ1ZhaWJoYXYnLCByb2xlOiAnQmFja2VuZCBEZXZlbG9wZXInfSxcclxuICAgICAgICB7IGlkIDogMywgbmFtZTogJ1N1cmVzaCcsIHJvbGU6ICdGcm9udGVuZCBEZXZlbG9wZXInfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICBjb25zdCBkZXZlbG9wZXJkZXRhaWxzID0gZGV0YWlscy5maW5kKGRldj0+e1xyXG4gICAgICAgIGRldi5pZCA9PT0gaWQgXHJcbiAgICB9KVxyXG4gICAgaWYoZGV2ZWxvcGVyZGV0YWlscyl7XHJcbiAgICAgICAgc2V0ZGV2ZWxvcGVyKGRldmVsb3BlcmRldGFpbHMpXHJcbiAgICB9XHJcblxyXG4gICAgaWYoIWRldmVsb3BlcmRldGFpbHMpe1xyXG4gICAgICAgIHJldHVybiA8aDE+RGV2ZWxvcGVyIGRvZXNuJ3QgZXhpc3Q8L2gxPjtcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgIDxoMT57ZGV2ZWxvcGVyLm5hbWV9PC9oMT5cclxuICAgIDxwPntkZXZlbG9wZXIucm9sZX08L3A+XHJcbjwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZXZlbG9wZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==