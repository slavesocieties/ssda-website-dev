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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst geog = [\r\n{\r\n  id: 0,\r\n  name: \"SSDA Collection\",\r\n  img: \"img/logo.jpg\",\r\n  parent: null\r\n},\r\n{\r\n  id: 1,\r\n  name: \"Brazil\",\r\n  img: \"img/logo.jpg\",\r\n  parent: 0\r\n},\r\n{\r\n  id: 2,\r\n  name: \"Minas Gerais\",\r\n  img: \"img/logo.jpg\",\r\n  parent: 1\r\n},\r\n{\r\n  id: 3,\r\n  name: \"Paraíba\",\r\n  img: \"img/logo.jpg\",\r\n  parent: 1\r\n},\r\n{\r\n  id: 4,\r\n  name: \"Rio de Janeiro\",\r\n  img: \"img/logo.jpg\",\r\n  parent: 1\r\n},\r\n{\r\n  id: 5,\r\n  name: \"Nova Lima\",\r\n  img: \"img/logo.jpg\",\r\n  parent: 2\r\n},\r\n{\r\n  id: 6,\r\n  name: \"João Pessoa\",\r\n  img: \"img/logo.jpg\",\r\n  parent: 3\r\n},\r\n{\r\n  id: 7,\r\n  name: \"São João do Cariri\",\r\n  img: \"img/logo.jpg\",\r\n  parent: 3\r\n}\r\n]\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (geog);\r\n\n\n//# sourceURL=webpack://ssda-website/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\r\n\r\nconst buildCollectionCard = (collection, parent) => {\r\n  if (collection.parent == parent) {\r\n    const div = document.createElement(\"div\");\r\n    const h4 = document.createElement(\"h4\");\r\n    const a = document.createElement(\"a\");\r\n    const img = document.createElement(\"img\");\r\n    const body = document.querySelector(\"body\");\r\n    body.append(div);\r\n    h4.append(a);\r\n    div.append(h4);\r\n    div.append(img);\r\n    a.innerHTML = collection.name;\r\n    var collectionName = collection.name;\r\n    collectionName = collectionName.toLowerCase().replace(\" \", \"_\");\r\n    var url = window.location.href;\r\n    var regex = new RegExp(\"[?&]\" + \"collection\" + \"(=([^&#]*)|&|#|$)\"),\r\n      results = regex.exec(url);\r\n    a.setAttribute(\"href\", results[0] + results[1] + \"=\" + collectionName);\r\n    img.setAttribute(\"src\", collection.img);\r\n    // div.setAttribute(\"class\", ???);\r\n  }\r\n};\r\n\r\nfunction getCollectionName(url) {\r\n  if (!url) url = window.location.href;\r\n  var regex = new RegExp(\"[?&]\" + \"collection\" + \"(=([^&#]*)|&|#|$)\"),\r\n    results = regex.exec(url);\r\n  if (!results) return null;\r\n  if (!results[2]) return null;\r\n  var decodedURI = decodeURI(results[2]);\r\n  decodedURI = decodedURI.replace(\"_\", \" \");\r\n  var collectionName = \"\";\r\n  for (var word of decodedURI.split(\" \")) {\r\n    word = word.charAt(0).toUpperCase() + word.substring(1, word.length);\r\n    collectionName = collectionName + word + \" \";\r\n  };\r\n  collectionName = collectionName.substring(0, collectionName.length - 1);\r\n  return collectionName;\r\n}\r\n\r\nfunction getCollectionId(collectionName) {\r\n  if (collectionName == null) {\r\n    return 0;\r\n  }\r\n  for (var collection of _data_js__WEBPACK_IMPORTED_MODULE_0__.default) {\r\n    if (collection.name == collectionName) {\r\n      return collection.id;\r\n    }\r\n  }\r\n  return 0;\r\n}\r\n\r\n//local dev\r\n//geog.forEach(collection => buildCollectionCard(collection, getCollectionId(getCollectionName(\"https://slavesocieties.github.io/ssda-website-dev/?collection=ghdth\"))));\r\n\r\n//browser\r\n_data_js__WEBPACK_IMPORTED_MODULE_0__.default.forEach(collection => buildCollectionCard(collection, getCollectionId(getCollectionName())));\r\n\n\n//# sourceURL=webpack://ssda-website/./src/index.js?");

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