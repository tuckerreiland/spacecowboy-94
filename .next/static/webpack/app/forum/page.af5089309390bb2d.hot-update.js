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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _effects_BlinkingCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../effects/BlinkingCursor */ \"(app-pages-browser)/./lib/effects/BlinkingCursor.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SearchInput = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [searchTerm, setSearchTerm] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [searchAutocomplete, setSearchAutocomplete] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [blink, setBlink] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    // TODO: order returned array of communities in alphanumeric order\n    const searchArray = [\n        \"anime\",\n        \"animation\",\n        \"cooking\",\n        \"mexican cooking\"\n    ];\n    const setSearch = (input)=>{\n        const searchResult = searchArray.find((str)=>str.charAt(0) === input.toLowerCase().charAt(0) && str.includes(input.toLowerCase()));\n        input ? setSearchInput(input) : setSearchInput(\"\");\n        searchResult ? setSearchAutocomplete(searchResult.slice(input.length)) : setSearchAutocomplete(\"\");\n        searchResult ? setSearchTerm(searchResult) : setSearchTerm(\"\");\n    };\n    const autocomplete = (e)=>{\n        if (e.keyCode === 9) {\n            console.log(searchTerm);\n            setSearchInput(searchTerm);\n            e.preventDefault();\n        } else {\n            null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"w-fit text-3xl font-mono\",\n                children: \"~/cantinet/\"\n            }, void 0, false, {\n                fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"row-start-1 col-start-1 z-10 appearance-none border-0 outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent caret-transparent text-3xl font-mono\",\n                        placeholder: \"\",\n                        onChange: (e)=>setSearch(e.target.value),\n                        onFocus: ()=>setBlink(true),\n                        onBlur: ()=>setBlink(false),\n                        onKeyDown: (e)=>autocomplete(e),\n                        tabIndex: -1,\n                        value: searchInput ? searchTerm : \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid row-start-1 col-start-1 text-3xl font-mono\",\n                        children: [\n                            blink ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"row-start-1 col-start-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"opacity-0\",\n                                        children: searchInput\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_effects_BlinkingCursor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        cursor: \"▋\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"row-start-1 col-start-1 opacity-50\",\n                                children: searchInput ? searchInput : \"search...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"row-start-1 col-start-1 opacity-50\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"opacity-0\",\n                                        children: searchInput\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    searchAutocomplete\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tuckerreiland/Code/spacecowboy-94/lib/components/forum/searchInput.jsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SearchInput, \"heAXa5E4wRvunqUXeV6Jd5+lzB8=\");\n_c = SearchInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchInput);\nvar _c;\n$RefreshReg$(_c, \"SearchInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9jb21wb25lbnRzL2ZvcnVtL3NlYXJjaElucHV0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRTBCO0FBRStCO0FBRXpELE1BQU1FLGNBQWM7O0lBRWhCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSixxREFBYyxDQUFDO0lBQ3JELE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHUCxxREFBYyxDQUFDO0lBQ25ELE1BQU0sQ0FBQ1Esb0JBQW9CQyxzQkFBc0IsR0FBR1QscURBQWMsQ0FBQztJQUVuRSxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gscURBQWMsQ0FBQztJQUV6QyxrRUFBa0U7SUFDbEUsTUFBTVksY0FBYztRQUNoQjtRQUNBO1FBQ0E7UUFDQTtLQUNIO0lBRUQsTUFBTUMsWUFBWSxDQUFFQztRQUNoQixNQUFNQyxlQUFlSCxZQUFZSSxJQUFJLENBQUMsQ0FBQ0MsTUFBTUEsSUFBSUMsTUFBTSxDQUFDLE9BQUtKLE1BQU1LLFdBQVcsR0FBR0QsTUFBTSxDQUFDLE1BQUlELElBQUlHLFFBQVEsQ0FBQ04sTUFBTUssV0FBVztRQUUxSEwsUUFBT1YsZUFBZVUsU0FBUVYsZUFBZTtRQUM3Q1csZUFBYU4sc0JBQXNCTSxhQUFhTSxLQUFLLENBQUNQLE1BQU1RLE1BQU0sS0FBR2Isc0JBQXNCO1FBQzNGTSxlQUFhUixjQUFjUSxnQkFBY1IsY0FBYztJQUMzRDtJQUVBLE1BQU1nQixlQUFlLENBQUNDO1FBQ2xCLElBQUlBLEVBQUVDLE9BQU8sS0FBRyxHQUFHO1lBQ2ZDLFFBQVFDLEdBQUcsQ0FBQ3JCO1lBQ1pGLGVBQWVFO1lBQ2ZrQixFQUFFSSxjQUFjO1FBQ3BCLE9BQU87WUFDSDtRQUNKO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEyQjs7Ozs7OzBCQUN6Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUVYLDhEQUFDaEI7d0JBQ0dnQixXQUFVO3dCQUNWRSxhQUFhO3dCQUNiQyxVQUFVLENBQUNULElBQU1YLFVBQVVXLEVBQUVVLE1BQU0sQ0FBQ0MsS0FBSzt3QkFDekNDLFNBQVMsSUFBSXpCLFNBQVM7d0JBQ3RCMEIsUUFBUSxJQUFJMUIsU0FBUzt3QkFDckIyQixXQUFXLENBQUNkLElBQUlELGFBQWFDO3dCQUM3QmUsVUFBVSxDQUFDO3dCQUNYSixPQUFPaEMsY0FBWUcsYUFBVzs7Ozs7O2tDQUVsQyw4REFBQ3VCO3dCQUNHQyxXQUFVOzs0QkFHVHBCLHNCQUNHLDhEQUFDcUI7Z0NBQUdELFdBQVU7O2tEQUNWLDhEQUFDVTt3Q0FBS1YsV0FBVTtrREFDWDNCOzs7Ozs7a0RBRUwsOERBQUNGLCtEQUFjQTt3Q0FBQ3dDLFFBQU87Ozs7Ozs7Ozs7OzBEQUczQiw4REFBQ1Y7Z0NBQUdELFdBQVU7MENBQ1QzQixjQUFZQSxjQUFZOzs7Ozs7MENBR2pDLDhEQUFDNEI7Z0NBQUdELFdBQVU7O2tEQUNWLDhEQUFDVTt3Q0FBS1YsV0FBVTtrREFDWDNCOzs7Ozs7b0NBRUpLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpCO0dBM0VNTjtLQUFBQTtBQTZFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvY29tcG9uZW50cy9mb3J1bS9zZWFyY2hJbnB1dC5qc3g/OTIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCbGlua2luZ0N1cnNvciBmcm9tICcuLi8uLi9lZmZlY3RzL0JsaW5raW5nQ3Vyc29yJ1xuXG5jb25zdCBTZWFyY2hJbnB1dCA9ICgpID0+IHtcbiAgIFxuICAgIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gUmVhY3QudXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3NlYXJjaEF1dG9jb21wbGV0ZSwgc2V0U2VhcmNoQXV0b2NvbXBsZXRlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgW2JsaW5rLCBzZXRCbGlua10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuICAgIC8vIFRPRE86IG9yZGVyIHJldHVybmVkIGFycmF5IG9mIGNvbW11bml0aWVzIGluIGFscGhhbnVtZXJpYyBvcmRlclxuICAgIGNvbnN0IHNlYXJjaEFycmF5ID0gW1xuICAgICAgICAnYW5pbWUnLFxuICAgICAgICAnYW5pbWF0aW9uJyxcbiAgICAgICAgJ2Nvb2tpbmcnLFxuICAgICAgICAnbWV4aWNhbiBjb29raW5nJyxcbiAgICBdXG5cbiAgICBjb25zdCBzZXRTZWFyY2ggPSAoIGlucHV0ICkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBzZWFyY2hBcnJheS5maW5kKChzdHIpPT5zdHIuY2hhckF0KDApPT09aW5wdXQudG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkmJnN0ci5pbmNsdWRlcyhpbnB1dC50b0xvd2VyQ2FzZSgpKSlcbiAgICAgICAgXG4gICAgICAgIGlucHV0PyhzZXRTZWFyY2hJbnB1dChpbnB1dCkpOnNldFNlYXJjaElucHV0KCcnKVxuICAgICAgICBzZWFyY2hSZXN1bHQ/c2V0U2VhcmNoQXV0b2NvbXBsZXRlKHNlYXJjaFJlc3VsdC5zbGljZShpbnB1dC5sZW5ndGgpKTpzZXRTZWFyY2hBdXRvY29tcGxldGUoJycpXG4gICAgICAgIHNlYXJjaFJlc3VsdD9zZXRTZWFyY2hUZXJtKHNlYXJjaFJlc3VsdCk6c2V0U2VhcmNoVGVybSgnJylcbiAgICB9XG5cbiAgICBjb25zdCBhdXRvY29tcGxldGUgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXlDb2RlPT09OSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VhcmNoVGVybSlcbiAgICAgICAgICAgIHNldFNlYXJjaElucHV0KHNlYXJjaFRlcm0pXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndy1maXQgdGV4dC0zeGwgZm9udC1tb25vJz5+L2NhbnRpbmV0LzwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCc+XG4gICAgICAgICAgICAgICAgey8qIFRPRE86IHRhYiBhdXRvY29tcGxldGVzIGlucHV0IHdpdGggc2VhcmNoVGVybSBzdGF0ZSAqL31cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdy1zdGFydC0xIGNvbC1zdGFydC0xIHotMTAgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0wIG91dGxpbmUtbm9uZSBib3JkZXItdHJhbnNwYXJlbnQgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOnJpbmctMCBiZy10cmFuc3BhcmVudCBjYXJldC10cmFuc3BhcmVudCB0ZXh0LTN4bCBmb250LW1vbm9cIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eycnfSBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+KChzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpKSl9XG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpPT5zZXRCbGluayh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoKT0+c2V0QmxpbmsoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKT0+YXV0b2NvbXBsZXRlKGUpfVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dD9zZWFyY2hUZXJtOicnfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZ3JpZCByb3ctc3RhcnQtMSBjb2wtc3RhcnQtMSB0ZXh0LTN4bCBmb250LW1vbm8nXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7LyogVE9ETzpjbGVhbiB1cCBsb2dpYywgbWF5YmUgd29yayB0aGlzIGludG8gYSBjb21wb25lbnQgYmFzZWQgY29uZGl0aW9uYWwgcmVuZGVyKi99XG4gICAgICAgICAgICAgICAgICAgIHtibGluaz9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3Jvdy1zdGFydC0xIGNvbC1zdGFydC0xJz4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nb3BhY2l0eS0wJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxpbmtpbmdDdXJzb3IgY3Vyc29yPSfilosnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3Jvdy1zdGFydC0xIGNvbC1zdGFydC0xIG9wYWNpdHktNTAnPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaElucHV0P3NlYXJjaElucHV0OidzZWFyY2guLi4nfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdyb3ctc3RhcnQtMSBjb2wtc3RhcnQtMSBvcGFjaXR5LTUwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nb3BhY2l0eS0wJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoQXV0b2NvbXBsZXRlfVxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoSW5wdXQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQmxpbmtpbmdDdXJzb3IiLCJTZWFyY2hJbnB1dCIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJ1c2VTdGF0ZSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VhcmNoQXV0b2NvbXBsZXRlIiwic2V0U2VhcmNoQXV0b2NvbXBsZXRlIiwiYmxpbmsiLCJzZXRCbGluayIsInNlYXJjaEFycmF5Iiwic2V0U2VhcmNoIiwiaW5wdXQiLCJzZWFyY2hSZXN1bHQiLCJmaW5kIiwic3RyIiwiY2hhckF0IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNsaWNlIiwibGVuZ3RoIiwiYXV0b2NvbXBsZXRlIiwiZSIsImtleUNvZGUiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbktleURvd24iLCJ0YWJJbmRleCIsInNwYW4iLCJjdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/components/forum/searchInput.jsx\n"));

/***/ })

});