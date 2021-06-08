/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascripts/main.js":
/*!*********************************!*\
  !*** ./src/javascripts/main.js ***!
  \*********************************/
/***/ (function() {

eval("const navDOMEl = document.getElementById('nav')\r\n\r\nconst handleWindowScroll = navDOMEl => {\r\n  if (window.scrollY <= 200) {\r\n    navDOMEl.classList.remove('main-navigation--not-on-top')\r\n  } else {\r\n    navDOMEl.classList.add('main-navigation--not-on-top')\r\n  }\r\n}\r\n\r\nwindow.addEventListener('scroll', () => handleWindowScroll(navDOMEl))\r\n\r\n\n\n//# sourceURL=webpack:///./src/javascripts/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/javascripts/main.js"]();
/******/ 	
/******/ })()
;