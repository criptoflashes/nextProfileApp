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

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\n\nconst Users = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        bg: \"red.200\",\n        children: props.users.map((u)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                py: \"2rem\",\n                px: \"2rem\",\n                justifyContent: \"space-between\",\n                bg: \"white\",\n                my: \"2rem\",\n                alignItems: \"center\",\n                onClick: (e)=>next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/users/[id]\", \"/users/\".concat(u.id)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        textAlign: \"center\",\n                        px: \"1rem\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                children: [\n                                    \"Name: \",\n                                    u.first_name,\n                                    \" \",\n                                    u.last_name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/NextProjectFazt/components/Users.js\",\n                                lineNumber: 20,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                children: [\n                                    \"Email: \",\n                                    u.email\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/NextProjectFazt/components/Users.js\",\n                                lineNumber: 23,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Desktop/NextProjectFazt/components/Users.js\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                        src: u.avatar,\n                        alt: u.first_name + u.last_name,\n                        borderRadius: \"full\",\n                        boxSize: \"100px\",\n                        objectFit: \"cover\",\n                        mx: \"5rem\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/NextProjectFazt/components/Users.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, u.id, true, {\n                fileName: \"/Users/mac/Desktop/NextProjectFazt/components/Users.js\",\n                lineNumber: 9,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/NextProjectFazt/components/Users.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0M7QUFDZ0M7QUFFbEUsTUFBTU0sUUFBUSxDQUFDQyxRQUFVO0lBQ3ZCLHFCQUNFLDhEQUFDTCxpREFBR0E7UUFBRU0sSUFBRztrQkFDTkQsTUFBTUUsS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsSUFBTTtZQUN0QixxQkFDRSw4REFBQ1Isa0RBQUlBO2dCQUNIUyxJQUFHO2dCQUNIQyxJQUFHO2dCQUVIQyxnQkFBZ0I7Z0JBQ2hCTixJQUFHO2dCQUNITyxJQUFHO2dCQUNIQyxZQUFZO2dCQUNaQyxTQUFTQyxDQUFBQSxJQUFLbEIsdURBQVcsQ0FBRSxlQUFlLFVBQWUsT0FBTFcsRUFBRVMsRUFBRTs7a0NBRXhELDhEQUFDbEIsaURBQUdBO3dCQUFDbUIsV0FBVzt3QkFBVVIsSUFBRzs7MENBQzNCLDhEQUFDWixrREFBSUE7O29DQUFFO29DQUNFVSxFQUFFVyxVQUFVO29DQUFDO29DQUFFWCxFQUFFWSxTQUFTOzs7Ozs7OzBDQUVuQyw4REFBQ3RCLGtEQUFJQTs7b0NBQUM7b0NBQVFVLEVBQUVhLEtBQUs7Ozs7Ozs7Ozs7Ozs7a0NBR3ZCLDhEQUFDbkIsbURBQUtBO3dCQUNKb0IsS0FBS2QsRUFBRWUsTUFBTTt3QkFDYkMsS0FBS2hCLEVBQUVXLFVBQVUsR0FBR1gsRUFBRVksU0FBUzt3QkFDL0JLLGNBQWE7d0JBQ2JDLFNBQVE7d0JBQ1JDLFdBQVU7d0JBQ1ZDLElBQUc7Ozs7Ozs7ZUFwQkFwQixFQUFFUyxFQUFFOzs7OztRQXdCZjs7Ozs7O0FBR047S0FuQ01kO0FBcUNOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlcnMuanM/ODE5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyICBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFRleHQsIEJveCwgRmxleCwgU3BhY2VyLCBJbWFnZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmNvbnN0IFVzZXJzID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCAgYmc9XCJyZWQuMjAwXCIgPlxuICAgICAge3Byb3BzLnVzZXJzLm1hcCgodSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICBweT1cIjJyZW1cIlxuICAgICAgICAgICAgcHg9XCIycmVtXCJcbiAgICAgICAgICAgIGtleT17dS5pZH1cbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn1cbiAgICAgICAgICAgIGJnPVwid2hpdGVcIlxuICAgICAgICAgICAgbXk9XCIycmVtXCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IFJvdXRlci5wdXNoICgnL3VzZXJzL1tpZF0nLCBgL3VzZXJzLyR7dS5pZH1gKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IHRleHRBbGlnbj17XCJjZW50ZXJcIn0gcHg9JzFyZW0nPlxuICAgICAgICAgICAgICA8VGV4dCA+XG4gICAgICAgICAgICAgICAgTmFtZToge3UuZmlyc3RfbmFtZX0ge3UubGFzdF9uYW1lfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0PkVtYWlsOiB7dS5lbWFpbH08L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17dS5hdmF0YXJ9XG4gICAgICAgICAgICAgIGFsdD17dS5maXJzdF9uYW1lICsgdS5sYXN0X25hbWV9XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImZ1bGxcIlxuICAgICAgICAgICAgICBib3hTaXplPVwiMTAwcHhcIlxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgIG14PSc1cmVtJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuIl0sIm5hbWVzIjpbIlJvdXRlciIsIlRleHQiLCJCb3giLCJGbGV4IiwiU3BhY2VyIiwiSW1hZ2UiLCJVc2VycyIsInByb3BzIiwiYmciLCJ1c2VycyIsIm1hcCIsInUiLCJweSIsInB4IiwianVzdGlmeUNvbnRlbnQiLCJteSIsImFsaWduSXRlbXMiLCJvbkNsaWNrIiwiZSIsInB1c2giLCJpZCIsInRleHRBbGlnbiIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsInNyYyIsImF2YXRhciIsImFsdCIsImJvcmRlclJhZGl1cyIsImJveFNpemUiLCJvYmplY3RGaXQiLCJteCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Users.js\n"));

/***/ })

});