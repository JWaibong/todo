/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialization_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialization.js */ \"./src/initialization.js\");\n\n(0,_initialization_js__WEBPACK_IMPORTED_MODULE_0__.initializeDOM)();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/initialization.js":
/*!*******************************!*\
  !*** ./src/initialization.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeDOM\": () => (/* binding */ initializeDOM)\n/* harmony export */ });\nfunction initializeDOM(){\n    const sidebar = document.getElementById(\"sidebar\");\n    let inbox = document.createElement(\"button\");\n    inbox.setAttribute(\"class\", \"button-active\");\n    inbox.textContent = \"Inbox\";\n    inbox.addEventListener(\"click\", () => {\n        const buttons = document.querySelectorAll(\".button-active\");\n        buttons.forEach(button => {\n            button.classList.toggle(\"button-active\");\n        });\n        inbox.classList.toggle(\"button-active\");\n\n    });\n\n    sidebar.appendChild(inbox);\n\n    let today = document.createElement(\"button\");\n    today.textContent = \"Today\";\n    today.addEventListener(\"click\", () => {\n        const buttons = document.querySelectorAll(\".button-active\");\n        buttons.forEach(button => {\n            button.classList.toggle(\"button-active\");\n        });\n        today.classList.toggle(\"button-active\");\n    });\n    sidebar.appendChild(today);\n\n    let week = document.createElement(\"button\");\n    week.textContent = \"This Week\";\n    week.addEventListener(\"click\", () => {\n        const buttons = document.querySelectorAll(\".button-active\");\n        buttons.forEach(button => {\n            button.classList.toggle(\"button-active\");\n        });\n        week.classList.toggle(\"button-active\");\n    });\n    sidebar.appendChild(week);\n\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/initialization.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;