"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/forum/page",{

/***/ "(app-pages-browser)/./lib/components/forum/searchInput.jsx":
/*!**********************************************!*\
  !*** ./lib/components/forum/searchInput.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _effects_BlinkingCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../effects/BlinkingCursor */ \"(app-pages-browser)/./lib/effects/BlinkingCursor.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SearchInput = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [searchTerm, setSearchTerm] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [searchAutocomplete, setSearchAutocomplete] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [blink, setBlink] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    // TODO: order returned array of communities in alphanumeric order\n    const searchArray = [\n        \"anime\",\n        \"animation\",\n        \"cooking\",\n        \"mexican cooking\"\n    ];\n    const setSearch = (input)=>{\n        const searchResult = searchArray.find((str)=>str.charAt(0) === input.toLowerCase().charAt(0) && str.includes(input.toLowerCase()));\n        input ? setSearchInput(input) : setSearchInput(\"\");\n        searchResult ? setSearchAutocomplete(searchResult.slice(input.length)) : setSearchAutocomplete(\"\");\n        searchResult ? setSearchTerm(searchResult) : setSearchTerm(\"\");\n    };\n    const autocomplete = (e)=>{\n        console.log(e.target.value);\n        if (e.keyCode === 9) {\n            e.target.value = searchTerm;\n            setSearchAutocomplete(\"\");\n            e.preventDefault();\n        } else {\n            null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"w-fit text-3xl font-mono\",\n                children: \"~/cantinet/\"\n            }, void 0, false, {\n                fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"row-start-1 col-start-1 z-10 appearance-none border-0 outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent caret-transparent text-3xl font-mono\",\n                        placeholder: \"\",\n                        onChange: (e)=>setSearch(e.target.value),\n                        onFocus: ()=>setBlink(true),\n                        onBlur: ()=>setBlink(false),\n                        onKeyDown: (e)=>autocomplete(e),\n                        tabIndex: -1\n                    }, void 0, false, {\n                        fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid row-start-1 col-start-1 text-3xl font-mono\",\n                        children: [\n                            blink ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"row-start-1 col-start-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"opacity-0\",\n                                        children: searchInput\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_effects_BlinkingCursor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        cursor: \"▋\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"row-start-1 col-start-1 opacity-50\",\n                                children: searchInput ? searchInput : \"search...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"row-start-1 col-start-1 opacity-50\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"opacity-0\",\n                                        children: searchInput\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    searchAutocomplete\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SearchInput, \"heAXa5E4wRvunqUXeV6Jd5+lzB8=\");\n_c = SearchInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchInput);\nvar _c;\n$RefreshReg$(_c, \"SearchInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9jb21wb25lbnRzL2ZvcnVtL3NlYXJjaElucHV0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRTBCO0FBRStCO0FBRXpELE1BQU1FLGNBQWM7O0lBRWhCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSixxREFBYyxDQUFDO0lBQ3JELE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHUCxxREFBYyxDQUFDO0lBQ25ELE1BQU0sQ0FBQ1Esb0JBQW9CQyxzQkFBc0IsR0FBR1QscURBQWMsQ0FBQztJQUVuRSxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gscURBQWMsQ0FBQztJQUV6QyxrRUFBa0U7SUFDbEUsTUFBTVksY0FBYztRQUNoQjtRQUNBO1FBQ0E7UUFDQTtLQUNIO0lBRUQsTUFBTUMsWUFBWSxDQUFFQztRQUNoQixNQUFNQyxlQUFlSCxZQUFZSSxJQUFJLENBQUMsQ0FBQ0MsTUFBTUEsSUFBSUMsTUFBTSxDQUFDLE9BQUtKLE1BQU1LLFdBQVcsR0FBR0QsTUFBTSxDQUFDLE1BQUlELElBQUlHLFFBQVEsQ0FBQ04sTUFBTUssV0FBVztRQUUxSEwsUUFBT1YsZUFBZVUsU0FBUVYsZUFBZTtRQUM3Q1csZUFBYU4sc0JBQXNCTSxhQUFhTSxLQUFLLENBQUNQLE1BQU1RLE1BQU0sS0FBR2Isc0JBQXNCO1FBQzNGTSxlQUFhUixjQUFjUSxnQkFBY1IsY0FBYztJQUMzRDtJQUVBLE1BQU1nQixlQUFlLENBQUNDO1FBQ2xCQyxRQUFRQyxHQUFHLENBQUNGLEVBQUVHLE1BQU0sQ0FBQ0MsS0FBSztRQUMxQixJQUFJSixFQUFFSyxPQUFPLEtBQUcsR0FBRztZQUNmTCxFQUFFRyxNQUFNLENBQUNDLEtBQUssR0FBR3RCO1lBQ2pCRyxzQkFBc0I7WUFDdEJlLEVBQUVNLGNBQWM7UUFDcEIsT0FBTztZQUNIO1FBQ0o7SUFDSjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTJCOzs7Ozs7MEJBQ3pDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBRVgsOERBQUNsQjt3QkFDR2tCLFdBQVU7d0JBQ1ZFLGFBQWE7d0JBQ2JDLFVBQVUsQ0FBQ1gsSUFBTVgsVUFBVVcsRUFBRUcsTUFBTSxDQUFDQyxLQUFLO3dCQUN6Q1EsU0FBUyxJQUFJekIsU0FBUzt3QkFDdEIwQixRQUFRLElBQUkxQixTQUFTO3dCQUNyQjJCLFdBQVcsQ0FBQ2QsSUFBSUQsYUFBYUM7d0JBQzdCZSxVQUFVLENBQUM7Ozs7OztrQ0FFZiw4REFBQ1I7d0JBQ0dDLFdBQVU7OzRCQUdUdEIsc0JBQ0csOERBQUN1QjtnQ0FBR0QsV0FBVTs7a0RBQ1YsOERBQUNRO3dDQUFLUixXQUFVO2tEQUNYN0I7Ozs7OztrREFFTCw4REFBQ0YsK0RBQWNBO3dDQUFDd0MsUUFBTzs7Ozs7Ozs7Ozs7MERBRzNCLDhEQUFDUjtnQ0FBR0QsV0FBVTswQ0FDVDdCLGNBQVlBLGNBQVk7Ozs7OzswQ0FHakMsOERBQUM4QjtnQ0FBR0QsV0FBVTs7a0RBQ1YsOERBQUNRO3dDQUFLUixXQUFVO2tEQUNYN0I7Ozs7OztvQ0FFSks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekI7R0EzRU1OO0tBQUFBO0FBNkVOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9jb21wb25lbnRzL2ZvcnVtL3NlYXJjaElucHV0LmpzeD85MjE2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJsaW5raW5nQ3Vyc29yIGZyb20gJy4uLy4uL2VmZmVjdHMvQmxpbmtpbmdDdXJzb3InXG5cbmNvbnN0IFNlYXJjaElucHV0ID0gKCkgPT4ge1xuICAgXG4gICAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbc2VhcmNoQXV0b2NvbXBsZXRlLCBzZXRTZWFyY2hBdXRvY29tcGxldGVdID0gUmVhY3QudXNlU3RhdGUoJycpXG5cbiAgICBjb25zdCBbYmxpbmssIHNldEJsaW5rXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXG4gICAgLy8gVE9ETzogb3JkZXIgcmV0dXJuZWQgYXJyYXkgb2YgY29tbXVuaXRpZXMgaW4gYWxwaGFudW1lcmljIG9yZGVyXG4gICAgY29uc3Qgc2VhcmNoQXJyYXkgPSBbXG4gICAgICAgICdhbmltZScsXG4gICAgICAgICdhbmltYXRpb24nLFxuICAgICAgICAnY29va2luZycsXG4gICAgICAgICdtZXhpY2FuIGNvb2tpbmcnLFxuICAgIF1cblxuICAgIGNvbnN0IHNldFNlYXJjaCA9ICggaW5wdXQgKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IHNlYXJjaEFycmF5LmZpbmQoKHN0cik9PnN0ci5jaGFyQXQoMCk9PT1pbnB1dC50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSYmc3RyLmluY2x1ZGVzKGlucHV0LnRvTG93ZXJDYXNlKCkpKVxuICAgICAgICBcbiAgICAgICAgaW5wdXQ/KHNldFNlYXJjaElucHV0KGlucHV0KSk6c2V0U2VhcmNoSW5wdXQoJycpXG4gICAgICAgIHNlYXJjaFJlc3VsdD9zZXRTZWFyY2hBdXRvY29tcGxldGUoc2VhcmNoUmVzdWx0LnNsaWNlKGlucHV0Lmxlbmd0aCkpOnNldFNlYXJjaEF1dG9jb21wbGV0ZSgnJylcbiAgICAgICAgc2VhcmNoUmVzdWx0P3NldFNlYXJjaFRlcm0oc2VhcmNoUmVzdWx0KTpzZXRTZWFyY2hUZXJtKCcnKVxuICAgIH1cblxuICAgIGNvbnN0IGF1dG9jb21wbGV0ZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICBpZiAoZS5rZXlDb2RlPT09OSkge1xuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBzZWFyY2hUZXJtXG4gICAgICAgICAgICBzZXRTZWFyY2hBdXRvY29tcGxldGUoJycpXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndy1maXQgdGV4dC0zeGwgZm9udC1tb25vJz5+L2NhbnRpbmV0LzwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCc+XG4gICAgICAgICAgICAgICAgey8qIFRPRE86IHRhYiBhdXRvY29tcGxldGVzIGlucHV0IHdpdGggc2VhcmNoVGVybSBzdGF0ZSAqL31cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdy1zdGFydC0xIGNvbC1zdGFydC0xIHotMTAgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0wIG91dGxpbmUtbm9uZSBib3JkZXItdHJhbnNwYXJlbnQgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOnJpbmctMCBiZy10cmFuc3BhcmVudCBjYXJldC10cmFuc3BhcmVudCB0ZXh0LTN4bCBmb250LW1vbm9cIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eycnfSBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+KChzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpKSl9XG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpPT5zZXRCbGluayh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoKT0+c2V0QmxpbmsoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKT0+YXV0b2NvbXBsZXRlKGUpfVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdncmlkIHJvdy1zdGFydC0xIGNvbC1zdGFydC0xIHRleHQtM3hsIGZvbnQtbW9ubydcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBUT0RPOmNsZWFuIHVwIGxvZ2ljLCBtYXliZSB3b3JrIHRoaXMgaW50byBhIGNvbXBvbmVudCBiYXNlZCBjb25kaXRpb25hbCByZW5kZXIqL31cbiAgICAgICAgICAgICAgICAgICAge2JsaW5rP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ncm93LXN0YXJ0LTEgY29sLXN0YXJ0LTEnPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdvcGFjaXR5LTAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGlua2luZ0N1cnNvciBjdXJzb3I9J+KWiycvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ncm93LXN0YXJ0LTEgY29sLXN0YXJ0LTEgb3BhY2l0eS01MCc+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoSW5wdXQ/c2VhcmNoSW5wdXQ6J3NlYXJjaC4uLid9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3Jvdy1zdGFydC0xIGNvbC1zdGFydC0xIG9wYWNpdHktNTAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdvcGFjaXR5LTAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hBdXRvY29tcGxldGV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hJbnB1dDsiXSwibmFtZXMiOlsiUmVhY3QiLCJCbGlua2luZ0N1cnNvciIsIlNlYXJjaElucHV0Iiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsInVzZVN0YXRlIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJzZWFyY2hBdXRvY29tcGxldGUiLCJzZXRTZWFyY2hBdXRvY29tcGxldGUiLCJibGluayIsInNldEJsaW5rIiwic2VhcmNoQXJyYXkiLCJzZXRTZWFyY2giLCJpbnB1dCIsInNlYXJjaFJlc3VsdCIsImZpbmQiLCJzdHIiLCJjaGFyQXQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2xpY2UiLCJsZW5ndGgiLCJhdXRvY29tcGxldGUiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsIm9uQmx1ciIsIm9uS2V5RG93biIsInRhYkluZGV4Iiwic3BhbiIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/components/forum/searchInput.jsx\n"));

/***/ })

});