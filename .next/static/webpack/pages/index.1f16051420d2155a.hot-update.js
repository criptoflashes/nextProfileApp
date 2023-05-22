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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\n\nconst Users = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        bg: \"red.200\",\n        children: props.users.map((u)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                direction: [\n                    \"column\",\n                    \"row\"\n                ],\n                spacing: \"24px\",\n                justifyContent: \"space-around\",\n                bg: \"white\",\n                my: \"5rem\",\n                alignItems: \"center\",\n                onClick: (e)=>next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/users/[id]\", \"/users/\".concat(u.id)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        textAlign: \"center\",\n                        px: \"1rem\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                children: [\n                                    \"Name: \",\n                                    u.first_name,\n                                    \" \",\n                                    u.last_name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/NextProjectFazt/components/Users.js\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                children: [\n                                    \"Email: \",\n                                    u.email\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/NextProjectFazt/components/Users.js\",\n                                lineNumber: 22,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Desktop/NextProjectFazt/components/Users.js\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                        src: u.avatar,\n                        alt: u.first_name + u.last_name,\n                        borderRadius: \"full\",\n                        boxSize: \"100px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/NextProjectFazt/components/Users.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, u.id, true, {\n                fileName: \"/Users/mac/Desktop/NextProjectFazt/components/Users.js\",\n                lineNumber: 9,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/NextProjectFazt/components/Users.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0M7QUFDdUM7QUFFekUsTUFBTU8sUUFBUSxDQUFDQyxRQUFVO0lBQ3ZCLHFCQUNFLDhEQUFDTixpREFBR0E7UUFBRU8sSUFBRztrQkFDTkQsTUFBTUUsS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsSUFBTTtZQUN0QixxQkFDRSw4REFBQ04sbURBQUtBO2dCQUFDTyxXQUFXO29CQUFDO29CQUFVO2lCQUFNO2dCQUFFQyxTQUFRO2dCQUczQ0MsZ0JBQWdCO2dCQUNoQk4sSUFBRztnQkFDSE8sSUFBRztnQkFDSEMsWUFBWTtnQkFDWkMsU0FBU0MsQ0FBQUEsSUFBS25CLHVEQUFXLENBQUUsZUFBZSxVQUFlLE9BQUxZLEVBQUVTLEVBQUU7O2tDQUV4RCw4REFBQ25CLGlEQUFHQTt3QkFBQ29CLFdBQVc7d0JBQVVDLElBQUc7OzBDQUMzQiw4REFBQ3RCLGtEQUFJQTs7b0NBQUU7b0NBQ0VXLEVBQUVZLFVBQVU7b0NBQUM7b0NBQUVaLEVBQUVhLFNBQVM7Ozs7Ozs7MENBRW5DLDhEQUFDeEIsa0RBQUlBOztvQ0FBQztvQ0FBUVcsRUFBRWMsS0FBSzs7Ozs7Ozs7Ozs7OztrQ0FHdkIsOERBQUNyQixtREFBS0E7d0JBQ0pzQixLQUFLZixFQUFFZ0IsTUFBTTt3QkFDYkMsS0FBS2pCLEVBQUVZLFVBQVUsR0FBR1osRUFBRWEsU0FBUzt3QkFDL0JLLGNBQWE7d0JBQ2JDLFNBQVE7Ozs7Ozs7ZUFsQkxuQixFQUFFUyxFQUFFOzs7OztRQXVCZjs7Ozs7O0FBR047S0FqQ01kO0FBbUNOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlcnMuanM/ODE5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyICBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFRleHQsIEJveCwgRmxleCwgU3BhY2VyLCBJbWFnZSwgU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5jb25zdCBVc2VycyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggIGJnPVwicmVkLjIwMFwiID5cbiAgICAgIHtwcm9wcy51c2Vycy5tYXAoKHUpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtbJ2NvbHVtbicsICdyb3cnXX0gc3BhY2luZz0nMjRweCcgXG4gICAgICAgICAgIFxuICAgICAgICAgICAga2V5PXt1LmlkfVxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtYXJvdW5kXCJ9XG4gICAgICAgICAgICBiZz1cIndoaXRlXCJcbiAgICAgICAgICAgIG15PVwiNXJlbVwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBSb3V0ZXIucHVzaCAoJy91c2Vycy9baWRdJywgYC91c2Vycy8ke3UuaWR9YCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IHB4PScxcmVtJz5cbiAgICAgICAgICAgICAgPFRleHQgPlxuICAgICAgICAgICAgICAgIE5hbWU6IHt1LmZpcnN0X25hbWV9IHt1Lmxhc3RfbmFtZX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dD5FbWFpbDoge3UuZW1haWx9PC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3UuYXZhdGFyfVxuICAgICAgICAgICAgICBhbHQ9e3UuZmlyc3RfbmFtZSArIHUubGFzdF9uYW1lfVxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJmdWxsXCJcbiAgICAgICAgICAgICAgYm94U2l6ZT1cIjEwMHB4XCJcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuIl0sIm5hbWVzIjpbIlJvdXRlciIsIlRleHQiLCJCb3giLCJGbGV4IiwiU3BhY2VyIiwiSW1hZ2UiLCJTdGFjayIsIlVzZXJzIiwicHJvcHMiLCJiZyIsInVzZXJzIiwibWFwIiwidSIsImRpcmVjdGlvbiIsInNwYWNpbmciLCJqdXN0aWZ5Q29udGVudCIsIm15IiwiYWxpZ25JdGVtcyIsIm9uQ2xpY2siLCJlIiwicHVzaCIsImlkIiwidGV4dEFsaWduIiwicHgiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJzcmMiLCJhdmF0YXIiLCJhbHQiLCJib3JkZXJSYWRpdXMiLCJib3hTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Users.js\n"));

/***/ })

});