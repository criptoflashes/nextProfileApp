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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Container */ \"./components/Container.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst User = (props)=>{\n    _s();\n    console.log(props);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query //me devuelve un objeto del que tomaré solo el id\n    ;\n    /* console.log(id) */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: props.user.avatar\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/NextProjectFazt/pages/users/[id].js\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/NextProjectFazt/pages/users/[id].js\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/NextProjectFazt/pages/users/[id].js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(User, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = User;\nUser.getInitialProps = async (ctx)=>{\n    console.log(ctx.query.id);\n    const res = await fetch(\"https://reqres.in/api/users/\".concat(ctx.query.id));\n    const resJSON = await res.json();\n    return {\n        user: resJSON.data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0Y7QUFDYTtBQUNnQjtBQUVsRSxNQUFNUSxPQUFNLENBQUNDLFFBQVU7O0lBQ3ZCQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1IsTUFBTUcsU0FBU1osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBQ2EsR0FBRSxFQUFDLEdBQUlELE9BQU9FLEtBQUssQ0FBRSxpREFBaUQ7O0lBQ2pGLG1CQUFtQixHQUNmLHFCQUNBLDhEQUFDWiw2REFBU0E7a0JBQ1YsNEVBQUNHLGtEQUFJQTtzQkFDTCw0RUFBQ1U7Z0JBQUlDLEtBQUtQLE1BQU1RLElBQUksQ0FBQ0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQjtHQWJNVjs7UUFFYVIsa0RBQVNBOzs7S0FGdEJRO0FBZU5BLEtBQUtXLGVBQWUsR0FBRyxPQUFNQyxNQUFRO0lBQ2pDVixRQUFRQyxHQUFHLENBQUNTLElBQUlOLEtBQUssQ0FBQ0QsRUFBRTtJQUN4QixNQUFNUSxNQUFNLE1BQU1DLE1BQU0sK0JBQTRDLE9BQWJGLElBQUlOLEtBQUssQ0FBQ0QsRUFBRTtJQUNuRSxNQUFNVSxVQUFXLE1BQU1GLElBQUlHLElBQUk7SUFDL0IsT0FBTTtRQUFDUCxNQUFNTSxRQUFRRSxJQUFJO0lBQUE7QUFDN0I7QUFLQSwrREFBZWpCLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW2lkXS5qcz8xNzg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgX2ZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCJcbmltcG9ydCB7IFRleHQsIEJveCwgRmxleCwgU3BhY2VyLCBJbWFnZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmNvbnN0IFVzZXIgPShwcm9wcykgPT4ge1xuY29uc29sZS5sb2cocHJvcHMpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCkgXG4gICAgY29uc3Qge2lkfSAgPSByb3V0ZXIucXVlcnkgIC8vbWUgZGV2dWVsdmUgdW4gb2JqZXRvIGRlbCBxdWUgdG9tYXLDqSBzb2xvIGVsIGlkXG4vKiBjb25zb2xlLmxvZyhpZCkgKi9cbiAgICByZXR1cm4oIFxuICAgIDxDb250YWluZXI+XG4gICAgPEZsZXg+XG4gICAgPGltZyBzcmM9e3Byb3BzLnVzZXIuYXZhdGFyfT48L2ltZz5cbiAgICA8L0ZsZXg+XG4gICAgPC9Db250YWluZXI+XG4gICAgXG4gICAgKVxufVxuXG5Vc2VyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKGN0eCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN0eC5xdWVyeS5pZClcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yZXFyZXMuaW4vYXBpL3VzZXJzLyR7Y3R4LnF1ZXJ5LmlkfWApXG4gICAgY29uc3QgcmVzSlNPTiA9ICBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJue3VzZXI6IHJlc0pTT04uZGF0YX1cbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJfZmV0Y2giLCJDb250YWluZXIiLCJUZXh0IiwiQm94IiwiRmxleCIsIlNwYWNlciIsIkltYWdlIiwiVXNlciIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJpbWciLCJzcmMiLCJ1c2VyIiwiYXZhdGFyIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzIiwiZmV0Y2giLCJyZXNKU09OIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});