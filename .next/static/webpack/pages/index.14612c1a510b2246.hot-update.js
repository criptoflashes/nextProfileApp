"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Container */ \"./components/Container.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Users */ \"./components/Users.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst Index = (props)=>{\n    console.log(props.users[7].name);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"MM-Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/NextProjectFazt/pages/index.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/NextProjectFazt/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Index\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/NextProjectFazt/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Users__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                users: true\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/NextProjectFazt/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/NextProjectFazt/pages/index.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n    ;\n};\n_c = Index;\nIndex.getInitialProps = async (ctx)=>{\n    const res = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default()(\"https://jsonplaceholder.typicode.com/users?10\");\n    const data = await res.json();\n    console.log(data);\n    return {\n        users: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDdEI7QUFDRztBQUNVO0FBQ0Y7QUFDRztBQUV4QyxNQUFNTSxRQUFRLENBQUNDLFFBQVU7SUFDdkJDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsS0FBSyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtJQUMvQixxQkFDRSw4REFBQ1gsNkRBQVNBOzswQkFDUiw4REFBQ0Usa0RBQUlBOzBCQUNILDRFQUFDVTs4QkFBTTs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNWLHlEQUFLQTtnQkFBQ08sS0FBSzs7Ozs7Ozs7Ozs7OztBQUloQjtLQWJJSjtBQWVOQSxNQUFNUSxlQUFlLEdBQUksT0FBT0MsTUFBUTtJQUN4QyxNQUFNQyxNQUFNLE1BQU1aLHVEQUFLQSxDQUFDO0lBQ3hCLE1BQU1hLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtJQUMzQlYsUUFBUUMsR0FBRyxDQUFDUTtJQUNaLE9BQU87UUFBQ1AsT0FBT087SUFBSTtBQUNuQjtBQUVBLCtEQUFlWCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnMnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgeyBGbGV4IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2cocHJvcHMudXNlcnNbN10ubmFtZSlcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NTS1Ib21lPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGgxPkluZGV4PC9oMT5cbiAgICAgIDxVc2VycyB1c2Vycy8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG47XG4gIH1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzICA9IGFzeW5jIChjdHgpID0+IHtcbmNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnM/MTAnKVxuY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbmNvbnNvbGUubG9nKGRhdGEpXG5yZXR1cm4ge3VzZXJzOiBkYXRhfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJSZWFjdCIsIkhlYWQiLCJVc2VycyIsImZldGNoIiwiRmxleCIsIkluZGV4IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidXNlcnMiLCJuYW1lIiwidGl0bGUiLCJoMSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});