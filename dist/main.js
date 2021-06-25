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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialization_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialization.js */ \"./src/initialization.js\");\n/* harmony import */ var _tasksAndProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksAndProjects.js */ \"./src/tasksAndProjects.js\");\n\n\n\n\n(0,_initialization_js__WEBPACK_IMPORTED_MODULE_0__.initializeDOM)();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/initialization.js":
/*!*******************************!*\
  !*** ./src/initialization.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeDOM\": () => (/* binding */ initializeDOM)\n/* harmony export */ });\n/* harmony import */ var _tasksAndProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksAndProjects.js */ \"./src/tasksAndProjects.js\");\n\nfunction initializeDOM(){\n    const container = document.getElementById(\"container\");\n    const sidebar = document.createElement(\"div\");\n    sidebar.setAttribute(\"id\", \"sidebar\");\n    container.appendChild(sidebar);\n\n    const content = document.createElement(\"div\");\n    content.setAttribute(\"id\", \"content\");\n    content.classList.add(\"content\");\n\n    let inbox = document.createElement(\"button\");\n    inbox.setAttribute(\"class\", \"button-active\");\n    inbox.setAttribute(\"id\", \"inbox\");\n    inbox.textContent = \"Inbox\";\n    inbox.addEventListener(\"click\", e => {\n        clickTab(e);\n        loadInboxContent();\n    });\n    sidebar.appendChild(inbox);\n\n    let today = document.createElement(\"button\");\n    today.textContent = \"Today\";\n    today.setAttribute(\"id\", \"today\");\n    today.addEventListener(\"click\", e => {\n        clickTab(e);\n        loadTodayContent();\n    });\n    sidebar.appendChild(today);\n\n    let week = document.createElement(\"button\");\n    week.textContent = \"This Week\";\n    week.setAttribute(\"id\", \"week\")\n    week.addEventListener(\"click\", e => {\n        clickTab(e);\n        loadWeekContent();\n    });\n    sidebar.appendChild(week);\n\n    container.appendChild(content);\n    loadInboxContent();\n\n\n\n\n}\n\nfunction clickTab(e){\n    const buttons = document.querySelectorAll(\".button-active\");\n    buttons.forEach(button => {\n        button.classList.toggle(\"button-active\");\n    });\n    e.target.classList.toggle(\"button-active\");\n}\n\nfunction replaceContent(){\n    const container = document.getElementById(\"container\");\n    const originalContent = document.getElementById(\"content\");\n    const content = document.createElement(\"div\");\n    content.classList.add(\"content\");\n    content.setAttribute(\"id\", \"content\");\n\n    container.replaceChild(content, originalContent);\n    return content;\n\n}\n\nfunction loadInboxContent(){\n    const inboxContent = replaceContent();\n\n\n    const title = document.createElement(\"p\");\n    title.textContent = \"Inbox\";\n    title.classList.add(\"tabTitle\");\n    inboxContent.appendChild(title);\n\n    _tasksAndProjects_js__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach(task => {\n        const taskDiv = document.createElement(\"div\");\n        taskDiv.classList.add(\"task-div\");\n        taskDiv.textContent = task.description; \n        inboxContent.appendChild(taskDiv);\n    });\n\n    const addTaskButton = document.createElement(\"button\");\n    addTaskButton.classList.add(\"add-task-button\");\n    addTaskButton.textContent = \"Add Task\";\n    inboxContent.appendChild(addTaskButton);\n    addTaskButton.addEventListener(\"click\", () => {\n        createPopUp(inboxContent, addTaskButton);\n\n    });\n\n    /* Stuff to add: \n    the addtaskbutton should have an eventlistener that brings up a prompt to\n    allow the user to submit details about their todo task. \n    During which, the addtaskbutton is removed until the user has submitted their \n    todo\n    \n    Add the todo task to a list of current tasks. \n    \n    Upon each reload of loadInbox Content, we need to get the tasks in order\n    (via sorting the list of tasks by date) and then re-display them each time.\n\n    Might have to seperate this loadInboxContent with another one just for page initialization\n    vs re-entry.\n\n\n\n\n    */\n}\nfunction createPopUp(inboxContent, addTaskButton){\n    const popUpBox = document.createElement(\"div\");\n    popUpBox.setAttribute(\"id\", \"add-task-popup\");\n    inboxContent.replaceChild(popUpBox, addTaskButton);\n\n    const input = document.createElement(\"input\");\n    input.setAttribute(\"type\", \"text\");\n    input.setAttribute(\"class\", \"input-add-task\");\n    input.setAttribute(\"id\", \"input-add-task\");\n\n    popUpBox.appendChild(input);\n\n    const add = document.createElement(\"button\");\n    add.setAttribute(\"id\", \"add-task-confirm\");\n    add.textContent = \"Add\";\n    add.addEventListener(\"click\", e => {\n        _tasksAndProjects_js__WEBPACK_IMPORTED_MODULE_0__.tasks.push((0,_tasksAndProjects_js__WEBPACK_IMPORTED_MODULE_0__.task)(input.value, null));\n        console.log(_tasksAndProjects_js__WEBPACK_IMPORTED_MODULE_0__.tasks);\n        loadInboxContent();\n\n    });\n\n\n    popUpBox.appendChild(add);\n\n    const cancel = document.createElement(\"button\");\n    cancel.setAttribute(\"id\", \"cancel-task-confirm\");\n    cancel.textContent = \"Cancel\";\n    cancel.addEventListener(\"click\", e=> {\n        loadInboxContent();\n    });\n\n    popUpBox.appendChild(cancel);\n\n\n\n\n\n\n\n\n\n\n\n}\n\nfunction loadTodayContent(){\n    const todayContent = replaceContent();\n\n    const title = document.createElement(\"p\");\n    title.textContent = \"Today\";\n    title.classList.add(\"tabTitle\");\n    todayContent.appendChild(title);\n\n\n\n}\n\nfunction loadWeekContent(){\n    const weekContent = replaceContent();\n\n\n    const title = document.createElement(\"p\");\n    title.textContent = \"This Week\";\n    title.classList.add(\"tabTitle\");\n    weekContent.appendChild(title);\n\n}\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/initialization.js?");

/***/ }),

/***/ "./src/tasksAndProjects.js":
/*!*********************************!*\
  !*** ./src/tasksAndProjects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"task\": () => (/* binding */ task),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\n\nlet tasks = [];\nlet task = (description, project) => {\n    const proto = {\n        type: \"task\",\n        project: project,\n    }\n    return Object.assign({}, proto, {description, project});\n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/tasksAndProjects.js?");

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