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

/***/ "./components/ToggleColorMode.js":
/*!***************************************!*\
  !*** ./components/ToggleColorMode.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/color-mode */ \"./node_modules/@chakra-ui/color-mode/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ToggleColorMode = ()=>{\n    _s();\n    const { colorMode , ToggleColorMode  } = (0,_chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            onClick: ()=>ToggleColorMode(),\n            children: colorMode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SunIcon, {}, void 0, false, {\n                fileName: \"/Users/mac/Desktop/NextProjectFazt/components/ToggleColorMode.js\",\n                lineNumber: 13,\n                columnNumber: 36\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {}, void 0, false, {\n                fileName: \"/Users/mac/Desktop/NextProjectFazt/components/ToggleColorMode.js\",\n                lineNumber: 13,\n                columnNumber: 49\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/NextProjectFazt/components/ToggleColorMode.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/NextProjectFazt/components/ToggleColorMode.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ToggleColorMode, \"tFI2s1kpGxOYBU+sDp5ynBOiI6s=\", false, function() {\n    return [\n        _chakra_ui_color_mode__WEBPACK_IMPORTED_MODULE_1__.useColorMode\n    ];\n});\n_c = ToggleColorMode;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleColorMode);\nvar _c;\n$RefreshReg$(_c, \"ToggleColorMode\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZ2dsZUNvbG9yTW9kZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxRDtBQUNBO0FBQ1Q7QUFHNUMsTUFBTUksa0JBQWtCLElBQUs7O0lBQzdCLE1BQUssRUFBQ0MsVUFBUyxFQUFFRCxnQkFBZSxFQUFDLEdBQUdGLG1FQUFZQTtJQUc1QyxxQkFDSSw4REFBQ0QsdURBQVNBO2tCQUNWLDRFQUFDRCxvREFBTUE7WUFBQ00sU0FBVyxJQUFNRjtzQkFDcEJDLGNBQWMsdUJBQVEsOERBQUNFOzs7OzBDQUFZLDhEQUFDSixzREFBUUE7Ozs7eUJBQUU7Ozs7Ozs7Ozs7O0FBSTNEO0dBWE1DOztRQUM4QkYsK0RBQVlBOzs7S0FEMUNFO0FBWU4sK0RBQWVBLGVBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2dnbGVDb2xvck1vZGUuanM/OTI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb2xvci1tb2RlXCI7XG5pbXBvcnQgeyBNb29uSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5cblxuY29uc3QgVG9nZ2xlQ29sb3JNb2RlID0gKCkgPT57XG5jb25zdHtjb2xvck1vZGUsIFRvZ2dsZUNvbG9yTW9kZX0gPSB1c2VDb2xvck1vZGUoKVxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCdXR0b24gb25DbGljayA9IHsoKSA9PiBUb2dnbGVDb2xvck1vZGUoKSB9PlxuICAgICAgICAgICAge2NvbG9yTW9kZSA9PT0gJ2RhcmsnPyA8U3VuSWNvbi8+IDogPE1vb25JY29uLz59XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUNvbG9yTW9kZSJdLCJuYW1lcyI6WyJCdXR0b24iLCJDb250YWluZXIiLCJ1c2VDb2xvck1vZGUiLCJNb29uSWNvbiIsIlRvZ2dsZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsIm9uQ2xpY2siLCJTdW5JY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ToggleColorMode.js\n"));

/***/ })

});