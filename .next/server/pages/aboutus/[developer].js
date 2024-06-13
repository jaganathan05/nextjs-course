(function() {
var exports = {};
exports.id = "pages/aboutus/[developer]";
exports.ids = ["pages/aboutus/[developer]"];
exports.modules = {

/***/ "./pages/aboutus/[developer].js":
/*!**************************************!*\
  !*** ./pages/aboutus/[developer].js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Jaganathan V\\Documents\\React Projects\\next js\\pages\\aboutus\\[developer].js";



function developer() {
  const {
    0: developer,
    1: setdeveloper
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const id = parseInt(router.query.developer);
  console.log(id);
  const details = [{
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
  let Developer;
  details.forEach(dev => {
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

/* harmony default export */ __webpack_exports__["default"] = (developer);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/aboutus/[developer].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYWJvdXR1cy9bZGV2ZWxvcGVyXS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiZGV2ZWxvcGVyIiwic2V0ZGV2ZWxvcGVyIiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInBhcnNlSW50IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlscyIsIm5hbWUiLCJyb2xlIiwiRGV2ZWxvcGVyIiwiZm9yRWFjaCIsImRldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUNqQixRQUFNO0FBQUEsT0FBQ0EsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLCtDQUFRLEVBQTFDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLFFBQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDSCxNQUFNLENBQUNJLEtBQVAsQ0FBYVAsU0FBZCxDQUFuQjtBQUVBUSxTQUFPLENBQUNDLEdBQVIsQ0FBWUosRUFBWjtBQUVBLFFBQU1LLE9BQU8sR0FBRyxDQUNaO0FBQUVMLE1BQUUsRUFBRyxDQUFQO0FBQVVNLFFBQUksRUFBRSxNQUFoQjtBQUF3QkMsUUFBSSxFQUFFO0FBQTlCLEdBRFksRUFFWjtBQUFFUCxNQUFFLEVBQUcsQ0FBUDtBQUFVTSxRQUFJLEVBQUUsU0FBaEI7QUFBMkJDLFFBQUksRUFBRTtBQUFqQyxHQUZZLEVBR1o7QUFBRVAsTUFBRSxFQUFHLENBQVA7QUFBVU0sUUFBSSxFQUFFLFFBQWhCO0FBQTBCQyxRQUFJLEVBQUU7QUFBaEMsR0FIWSxDQUFoQjtBQUtKLE1BQUlDLFNBQUo7QUFDSUgsU0FBTyxDQUFDSSxPQUFSLENBQWdCQyxHQUFHLElBQUU7QUFFakIsUUFBR0EsR0FBRyxDQUFDVixFQUFKLEtBQVdBLEVBQWQsRUFBaUI7QUFDYlEsZUFBUyxHQUFHRSxHQUFaO0FBQ0g7QUFDSixHQUxEO0FBT0FQLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSSxTQUFaOztBQUdBLE1BQUcsQ0FBQ0EsU0FBSixFQUFjO0FBQ1Ysd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNIOztBQUlELHNCQUFPO0FBQUEsNEJBQ1A7QUFBQSxnQkFBS0EsU0FBUyxDQUFDRjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETyxlQUVQO0FBQUEsZ0JBQUlFLFNBQVMsQ0FBQ0Q7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFJSDs7QUFFRCwrREFBZVosU0FBZixFOzs7Ozs7Ozs7OztBQ3ZDQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9hYm91dHVzL1tkZXZlbG9wZXJdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gZGV2ZWxvcGVyICgpe1xyXG4gICAgY29uc3QgW2RldmVsb3Blciwgc2V0ZGV2ZWxvcGVyXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIFxyXG4gICAgY29uc3QgaWQgPSBwYXJzZUludChyb3V0ZXIucXVlcnkuZGV2ZWxvcGVyKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGlkKVxyXG5cclxuICAgIGNvbnN0IGRldGFpbHMgPSBbXHJcbiAgICAgICAgeyBpZCA6IDEsIG5hbWU6ICdZYXNoJywgcm9sZTogJ1NlbmlvciBEZXZlbG9wZXInfSxcclxuICAgICAgICB7IGlkIDogMiwgbmFtZTogJ1ZhaWJoYXYnLCByb2xlOiAnQmFja2VuZCBEZXZlbG9wZXInfSxcclxuICAgICAgICB7IGlkIDogMywgbmFtZTogJ1N1cmVzaCcsIHJvbGU6ICdGcm9udGVuZCBEZXZlbG9wZXInfVxyXG4gICAgICAgIF1cclxubGV0IERldmVsb3BlcjtcclxuICAgIGRldGFpbHMuZm9yRWFjaChkZXY9PntcclxuXHJcbiAgICAgICAgaWYoZGV2LmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgIERldmVsb3BlciA9IGRldlxyXG4gICAgICAgIH0gXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKERldmVsb3BlcilcclxuICAgIFxyXG5cclxuICAgIGlmKCFEZXZlbG9wZXIpe1xyXG4gICAgICAgIHJldHVybiA8aDE+RGV2ZWxvcGVyIGRvZXNuJ3QgZXhpc3Q8L2gxPjtcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgIDxoMT57RGV2ZWxvcGVyLm5hbWV9PC9oMT5cclxuICAgIDxwPntEZXZlbG9wZXIucm9sZX08L3A+XHJcbjwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZXZlbG9wZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=