"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Container */ \"./components/Container.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst User = (param)=>{\n    let { user  } = param;\n    _s();\n    console.log(user);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query; //me devuelve un objeto del que tomaré solo el id\n    /* console.log(id) */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    children: [\n                        \"Name: \",\n                        user.first_name,\n                        \" \",\n                        user.last_name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/NextProjectFazt/pages/users/[id].js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    children: [\n                        \"Email: \",\n                        user.email\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/NextProjectFazt/pages/users/[id].js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                    src: user.avatar,\n                    alt: user.first_name + user.last_name,\n                    borderRadius: \"full\",\n                    boxSize: \"100px\",\n                    objectFit: \"cover\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/NextProjectFazt/pages/users/[id].js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Desktop/NextProjectFazt/pages/users/[id].js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/NextProjectFazt/pages/users/[id].js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(User, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = User;\nUser.getInitialProps = async (ctx)=>{\n    console.log(ctx.query.id);\n    const res = await fetch(\"https://reqres.in/api/users/\".concat(ctx.query.id));\n    const resJSON = await res.json();\n    return {\n        user: resJSON.data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0Y7QUFDYTtBQUNlO0FBRWxFLE1BQU1RLE9BQU8sU0FBYztRQUFiLEVBQUVDLEtBQUksRUFBRTs7SUFDcEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNRyxTQUFTWixzREFBU0E7SUFDeEIsTUFBTSxFQUFFYSxHQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSyxFQUFFLGlEQUFpRDtJQUM5RSxtQkFBbUIsR0FDbkIscUJBQ0UsOERBQUNaLDZEQUFTQTtrQkFDUiw0RUFBQ0csa0RBQUlBOzs4QkFDSCw4REFBQ0Ysa0RBQUlBOzt3QkFBQzt3QkFDR00sS0FBS00sVUFBVTt3QkFBQzt3QkFBRU4sS0FBS08sU0FBUzs7Ozs7Ozs4QkFFekMsOERBQUNiLGtEQUFJQTs7d0JBQUM7d0JBQVFNLEtBQUtRLEtBQUs7Ozs7Ozs7OEJBRXhCLDhEQUFDVixtREFBS0E7b0JBQ0pXLEtBQUtULEtBQUtVLE1BQU07b0JBQ2hCQyxLQUFLWCxLQUFLTSxVQUFVLEdBQUdOLEtBQUtPLFNBQVM7b0JBQ3JDSyxjQUFhO29CQUNiQyxTQUFRO29CQUNSQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQjtHQXZCTWY7O1FBRVdSLGtEQUFTQTs7O0tBRnBCUTtBQXlCTkEsS0FBS2dCLGVBQWUsR0FBRyxPQUFPQyxNQUFRO0lBQ3BDZixRQUFRQyxHQUFHLENBQUNjLElBQUlYLEtBQUssQ0FBQ0QsRUFBRTtJQUN4QixNQUFNYSxNQUFNLE1BQU1DLE1BQU0sK0JBQTRDLE9BQWJGLElBQUlYLEtBQUssQ0FBQ0QsRUFBRTtJQUNuRSxNQUFNZSxVQUFVLE1BQU1GLElBQUlHLElBQUk7SUFDOUIsT0FBTztRQUFFcEIsTUFBTW1CLFFBQVFFLElBQUk7SUFBQztBQUM5QjtBQUVBLCtEQUFldEIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgX2ZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgVGV4dCwgQm94LCBGbGV4LCBTcGFjZXIsIEltYWdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuY29uc3QgVXNlciA9ICh7IHVzZXIgfSkgPT4ge1xuICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTsgLy9tZSBkZXZ1ZWx2ZSB1biBvYmpldG8gZGVsIHF1ZSB0b21hcsOpIHNvbG8gZWwgaWRcbiAgLyogY29uc29sZS5sb2coaWQpICovXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxGbGV4PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICBOYW1lOiB7dXNlci5maXJzdF9uYW1lfSB7dXNlci5sYXN0X25hbWV9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+RW1haWw6IHt1c2VyLmVtYWlsfTwvVGV4dD5cblxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e3VzZXIuYXZhdGFyfVxuICAgICAgICAgIGFsdD17dXNlci5maXJzdF9uYW1lICsgdXNlci5sYXN0X25hbWV9XG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwiZnVsbFwiXG4gICAgICAgICAgYm94U2l6ZT1cIjEwMHB4XCJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgIC8+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5Vc2VyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgY29uc29sZS5sb2coY3R4LnF1ZXJ5LmlkKTtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycy8ke2N0eC5xdWVyeS5pZH1gKTtcbiAgY29uc3QgcmVzSlNPTiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7IHVzZXI6IHJlc0pTT04uZGF0YSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJfZmV0Y2giLCJDb250YWluZXIiLCJUZXh0IiwiQm94IiwiRmxleCIsIlNwYWNlciIsIkltYWdlIiwiVXNlciIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsInNyYyIsImF2YXRhciIsImFsdCIsImJvcmRlclJhZGl1cyIsImJveFNpemUiLCJvYmplY3RGaXQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXMiLCJmZXRjaCIsInJlc0pTT04iLCJqc29uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});