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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeDOM\": () => (/* binding */ initializeDOM)\n/* harmony export */ });\nfunction initializeDOM(){\n    const container = document.getElementById(\"container\");\n    const sidebar = document.createElement(\"div\");\n    sidebar.setAttribute(\"id\", \"sidebar\");\n    container.appendChild(sidebar);\n\n    const content = document.createElement(\"div\");\n    content.setAttribute(\"id\", \"content\");\n    content.classList.add(\"content\");\n\n    let inbox = document.createElement(\"button\");\n    inbox.setAttribute(\"class\", \"button-active\");\n\n    inbox.setAttribute(\"id\", \"inbox\");\n    inbox.textContent = \"Inbox\";\n    inbox.addEventListener(\"click\", e => {\n        clickTab(e);\n        loadInboxContent();\n    });\n    sidebar.appendChild(inbox);\n\n    let today = document.createElement(\"button\");\n    today.textContent = \"Today\";\n    today.setAttribute(\"id\", \"today\");\n    today.addEventListener(\"click\", e => {\n        clickTab(e);\n        loadTodayContent();\n    });\n    sidebar.appendChild(today);\n\n    let week = document.createElement(\"button\");\n    week.textContent = \"This Week\";\n    week.setAttribute(\"id\", \"week\")\n    week.addEventListener(\"click\", e => {\n        clickTab(e);\n        loadWeekContent();\n\n    });\n    sidebar.appendChild(week);\n\n    container.appendChild(content);\n    loadInboxContent();\n\n\n}\n\nfunction clickTab(e){\n    const buttons = document.querySelectorAll(\".button-active\");\n    buttons.forEach(button => {\n        button.classList.toggle(\"button-active\");\n    });\n    e.target.classList.toggle(\"button-active\");\n}\n\nfunction replaceContent(){\n    const container = document.getElementById(\"container\");\n    const originalContent = document.getElementById(\"content\");\n    const content = document.createElement(\"div\");\n    content.classList.add(\"content\");\n    content.setAttribute(\"id\", \"content\");\n\n    container.replaceChild(content, originalContent);\n    return content;\n\n}\n\nfunction loadInboxContent(){\n    const inboxContent = replaceContent();\n    inboxContent.textContent = \"inbox\";\n\n\n}\n\nfunction loadTodayContent(){\n    const todayConent = replaceContent();\n    todayConent.textContent = \"today\";\n\n}\n\nfunction loadWeekContent(){\n    const weekContent = replaceContent();\n    weekContent.textContent = \"week\";\n\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/initialization.js?");

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