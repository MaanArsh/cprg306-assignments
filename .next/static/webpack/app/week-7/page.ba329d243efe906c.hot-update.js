"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/week-7/page",{

/***/ "(app-pages-browser)/./app/week-7/meal-ideas.js":
/*!**********************************!*\
  !*** ./app/week-7/meal-ideas.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst fetchMealDetails = async (idOfMeal)=>{\n    try {\n        const response = await fetch(\"https://www.themealdb.com/api/json/v1/1/lookup.php?i=\".concat(idOfMeal));\n        const data = await response.json();\n        return data.meals ? data.meals[0] : null;\n    } catch (error) {\n        console.error(\"Error fetching meal details:\", error);\n        return null;\n    }\n};\nconst fetchMealIdeas = async (ingredient)=>{\n    try {\n        const response = await fetch(\"https://www.themealdb.com/api/json/v1/1/filter.php?i=\".concat(ingredient));\n        const data = await response.json();\n        return data.meals || [];\n    } catch (error) {\n        console.error(\"Error fetching meal ideas:\", error);\n        return [];\n    }\n};\nconst MealIdeas = (param)=>{\n    let { ingredient } = param;\n    _s();\n    const [meals, setMeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedMeal, setSelectedMeal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const loadMealIdeas = async ()=>{\n        const mealList = await fetchMealIdeas(ingredient);\n        setMeals(mealList);\n        setSelectedMeal(null);\n    };\n    const loadMealDetails = async (idOfMeal)=>{\n        const mealDetails = await fetchMealDetails(idOfMeal);\n        setSelectedMeal(mealDetails);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        loadMealIdeas();\n    }, [\n        ingredient\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            meals.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: meals.map((meal)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer\",\n                        onClick: ()=>loadMealDetails(meal.idMeal),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: meal.strMeal\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jasha\\\\Documents\\\\GitHub\\\\cprg306-assignments\\\\app\\\\week-7\\\\meal-ideas.js\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, undefined),\n                            selectedMeal && meal.idMeal === selectedMeal.idMeal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xs text-gray-400 ml-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Ingredients for \".concat(selectedMeal.strMeal)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jasha\\\\Documents\\\\GitHub\\\\cprg306-assignments\\\\app\\\\week-7\\\\meal-ideas.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: Array.from({\n                                            length: 20\n                                        }, (_, i)=>i + 1).map((index)=>{\n                                            const ingredientKey = \"strIngredient\".concat(index);\n                                            const measureKey = \"strMeasure\".concat(index);\n                                            const ingredient = selectedMeal[ingredientKey];\n                                            const measure = selectedMeal[measureKey];\n                                            if (ingredient && ingredient.trim() !== \"\") {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    children: \"\".concat(measure ? \"\".concat(measure, \" \") : \"\").concat(ingredient)\n                                                }, index, false, {\n                                                    fileName: \"C:\\\\Users\\\\jasha\\\\Documents\\\\GitHub\\\\cprg306-assignments\\\\app\\\\week-7\\\\meal-ideas.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 32\n                                                }, undefined);\n                                            }\n                                            return null;\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jasha\\\\Documents\\\\GitHub\\\\cprg306-assignments\\\\app\\\\week-7\\\\meal-ideas.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jasha\\\\Documents\\\\GitHub\\\\cprg306-assignments\\\\app\\\\week-7\\\\meal-ideas.js\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, meal.idMeal, true, {\n                        fileName: \"C:\\\\Users\\\\jasha\\\\Documents\\\\GitHub\\\\cprg306-assignments\\\\app\\\\week-7\\\\meal-ideas.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jasha\\\\Documents\\\\GitHub\\\\cprg306-assignments\\\\app\\\\week-7\\\\meal-ideas.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            !selectedMeal && meals.length === 0 && ingredient && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"No meal ideas found for \",\n                    ingredient\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jasha\\\\Documents\\\\GitHub\\\\cprg306-assignments\\\\app\\\\week-7\\\\meal-ideas.js\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jasha\\\\Documents\\\\GitHub\\\\cprg306-assignments\\\\app\\\\week-7\\\\meal-ideas.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MealIdeas, \"q1wPen3WWS3oz3/Fvz54pJlyAJE=\");\n_c = MealIdeas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MealIdeas);\nvar _c;\n$RefreshReg$(_c, \"MealIdeas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93ZWVrLTcvbWVhbC1pZGVhcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFNEM7QUFFNUMsTUFBTUUsbUJBQW1CLE9BQU9DO0lBQzlCLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sd0RBQWlFLE9BQVRGO1FBQ3JGLE1BQU1HLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtRQUNoQyxPQUFPRCxLQUFLRSxLQUFLLEdBQUdGLEtBQUtFLEtBQUssQ0FBQyxFQUFFLEdBQUc7SUFDdEMsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQzlDLE9BQU87SUFDVDtBQUNGO0FBRUEsTUFBTUUsaUJBQWlCLE9BQU9DO0lBQzVCLElBQUk7UUFDRixNQUFNUixXQUFXLE1BQU1DLE1BQU0sd0RBQW1FLE9BQVhPO1FBQ3JGLE1BQU1OLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtRQUNoQyxPQUFPRCxLQUFLRSxLQUFLLElBQUksRUFBRTtJQUN6QixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMsT0FBTyxFQUFFO0lBQ1g7QUFDRjtBQUVBLE1BQU1JLFlBQVk7UUFBQyxFQUFFRCxVQUFVLEVBQUU7O0lBQy9CLE1BQU0sQ0FBQ0osT0FBT00sU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ2UsY0FBY0MsZ0JBQWdCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNaUIsZ0JBQWdCO1FBQ3BCLE1BQU1DLFdBQVcsTUFBTVAsZUFBZUM7UUFDdENFLFNBQVNJO1FBQ1RGLGdCQUFnQjtJQUNsQjtJQUVBLE1BQU1HLGtCQUFrQixPQUFPaEI7UUFDN0IsTUFBTWlCLGNBQWMsTUFBTWxCLGlCQUFpQkM7UUFDM0NhLGdCQUFnQkk7SUFDbEI7SUFFQW5CLGdEQUFTQSxDQUFDO1FBQ1JnQjtJQUNGLEdBQUc7UUFBQ0w7S0FBVztJQUVmLHFCQUNFLDhEQUFDUzs7WUFDRWIsTUFBTWMsTUFBTSxHQUFHLG1CQUNkLDhEQUFDQzswQkFDRWYsTUFBTWdCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0M7d0JBRUNDLFdBQVU7d0JBQ1ZDLFNBQVMsSUFBTVQsZ0JBQWdCTSxLQUFLSSxNQUFNOzswQ0FFMUMsOERBQUNDOzBDQUFHTCxLQUFLTSxPQUFPOzs7Ozs7NEJBQ2ZoQixnQkFBZ0JVLEtBQUtJLE1BQU0sS0FBS2QsYUFBYWMsTUFBTSxrQkFDbEQsOERBQUNSO2dDQUFJTSxXQUFVOztrREFDYiw4REFBQ0s7a0RBQUksbUJBQXdDLE9BQXJCakIsYUFBYWdCLE9BQU87Ozs7OztrREFDNUMsOERBQUNSO2tEQUNFVSxNQUFNQyxJQUFJLENBQUM7NENBQUVaLFFBQVE7d0NBQUcsR0FBRyxDQUFDYSxHQUFHQyxJQUFNQSxJQUFJLEdBQUdaLEdBQUcsQ0FBQyxDQUFDYTs0Q0FDaEQsTUFBTUMsZ0JBQWdCLGdCQUFzQixPQUFORDs0Q0FDdEMsTUFBTUUsYUFBYSxhQUFtQixPQUFORjs0Q0FDaEMsTUFBTXpCLGFBQWFHLFlBQVksQ0FBQ3VCLGNBQWM7NENBQzlDLE1BQU1FLFVBQVV6QixZQUFZLENBQUN3QixXQUFXOzRDQUV4QyxJQUFJM0IsY0FBY0EsV0FBVzZCLElBQUksT0FBTyxJQUFJO2dEQUMxQyxxQkFBTyw4REFBQ2Y7OERBQWdCLEdBQWtDZCxPQUEvQjRCLFVBQVUsR0FBVyxPQUFSQSxTQUFRLE9BQUssSUFBZ0IsT0FBWDVCO21EQUExQ3lCOzs7Ozs0Q0FDbEI7NENBRUEsT0FBTzt3Q0FDVDs7Ozs7Ozs7Ozs7Ozt1QkFwQkRaLEtBQUtJLE1BQU07Ozs7Ozs7Ozs7WUE2QnZCLENBQUNkLGdCQUFnQlAsTUFBTWMsTUFBTSxLQUFLLEtBQUtWLDRCQUN0Qyw4REFBQ2tCOztvQkFBRTtvQkFBeUJsQjs7Ozs7Ozs7Ozs7OztBQUtwQztHQTVETUM7S0FBQUE7QUE4RE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3dlZWstNy9tZWFsLWlkZWFzLmpzPzBmMDgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBmZXRjaE1lYWxEZXRhaWxzID0gYXN5bmMgKGlkT2ZNZWFsKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JHtpZE9mTWVhbH1gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YS5tZWFscyA/IGRhdGEubWVhbHNbMF0gOiBudWxsO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBtZWFsIGRldGFpbHM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hNZWFsSWRlYXMgPSBhc3luYyAoaW5ncmVkaWVudCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD9pPSR7aW5ncmVkaWVudH1gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YS5tZWFscyB8fCBbXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbWVhbCBpZGVhczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgTWVhbElkZWFzID0gKHsgaW5ncmVkaWVudCB9KSA9PiB7XHJcbiAgY29uc3QgW21lYWxzLCBzZXRNZWFsc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTWVhbCwgc2V0U2VsZWN0ZWRNZWFsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBsb2FkTWVhbElkZWFzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbWVhbExpc3QgPSBhd2FpdCBmZXRjaE1lYWxJZGVhcyhpbmdyZWRpZW50KTtcclxuICAgIHNldE1lYWxzKG1lYWxMaXN0KTtcclxuICAgIHNldFNlbGVjdGVkTWVhbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2FkTWVhbERldGFpbHMgPSBhc3luYyAoaWRPZk1lYWwpID0+IHtcclxuICAgIGNvbnN0IG1lYWxEZXRhaWxzID0gYXdhaXQgZmV0Y2hNZWFsRGV0YWlscyhpZE9mTWVhbCk7XHJcbiAgICBzZXRTZWxlY3RlZE1lYWwobWVhbERldGFpbHMpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkTWVhbElkZWFzKCk7XHJcbiAgfSwgW2luZ3JlZGllbnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHttZWFscy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7bWVhbHMubWFwKChtZWFsKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGtleT17bWVhbC5pZE1lYWx9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIG0tMSBiZy1zbGF0ZS05MDAgbWF4LXctc20gaG92ZXI6Ymctb3JhbmdlLTgwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbG9hZE1lYWxEZXRhaWxzKG1lYWwuaWRNZWFsKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwPnttZWFsLnN0ck1lYWx9PC9wPlxyXG4gICAgICAgICAgICAgIHtzZWxlY3RlZE1lYWwgJiYgbWVhbC5pZE1lYWwgPT09IHNlbGVjdGVkTWVhbC5pZE1lYWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDAgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2BJbmdyZWRpZW50cyBmb3IgJHtzZWxlY3RlZE1lYWwuc3RyTWVhbH1gfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogMjAgfSwgKF8sIGkpID0+IGkgKyAxKS5tYXAoKGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmdyZWRpZW50S2V5ID0gYHN0ckluZ3JlZGllbnQke2luZGV4fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZWFzdXJlS2V5ID0gYHN0ck1lYXN1cmUke2luZGV4fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmdyZWRpZW50ID0gc2VsZWN0ZWRNZWFsW2luZ3JlZGllbnRLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVhc3VyZSA9IHNlbGVjdGVkTWVhbFttZWFzdXJlS2V5XTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5ncmVkaWVudCAmJiBpbmdyZWRpZW50LnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT57YCR7bWVhc3VyZSA/IGAke21lYXN1cmV9IGAgOiAnJ30ke2luZ3JlZGllbnR9YH08L2xpPjtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgeyFzZWxlY3RlZE1lYWwgJiYgbWVhbHMubGVuZ3RoID09PSAwICYmIGluZ3JlZGllbnQgJiYgKFxyXG4gICAgICAgIDxwPk5vIG1lYWwgaWRlYXMgZm91bmQgZm9yIHtpbmdyZWRpZW50fTwvcD5cclxuICAgICAgKX1cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVhbElkZWFzOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoTWVhbERldGFpbHMiLCJpZE9mTWVhbCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm1lYWxzIiwiZXJyb3IiLCJjb25zb2xlIiwiZmV0Y2hNZWFsSWRlYXMiLCJpbmdyZWRpZW50IiwiTWVhbElkZWFzIiwic2V0TWVhbHMiLCJzZWxlY3RlZE1lYWwiLCJzZXRTZWxlY3RlZE1lYWwiLCJsb2FkTWVhbElkZWFzIiwibWVhbExpc3QiLCJsb2FkTWVhbERldGFpbHMiLCJtZWFsRGV0YWlscyIsImRpdiIsImxlbmd0aCIsInVsIiwibWFwIiwibWVhbCIsImxpIiwiY2xhc3NOYW1lIiwib25DbGljayIsImlkTWVhbCIsInAiLCJzdHJNZWFsIiwiaDMiLCJBcnJheSIsImZyb20iLCJfIiwiaSIsImluZGV4IiwiaW5ncmVkaWVudEtleSIsIm1lYXN1cmVLZXkiLCJtZWFzdXJlIiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/week-7/meal-ideas.js\n"));

/***/ })

});