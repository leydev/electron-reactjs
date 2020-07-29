module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/electron.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/electron-is-dev/index.js":
/*!***********************************************!*\
  !*** ./node_modules/electron-is-dev/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst electron = __webpack_require__(/*! electron */ \"electron\");\n\nif (typeof electron === 'string') {\n\tthrow new TypeError('Not running in an Electron environment!');\n}\n\nconst app = electron.app || electron.remote.app;\n\nconst isEnvSet = 'ELECTRON_IS_DEV' in process.env;\nconst getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;\n\nmodule.exports = isEnvSet ? getFromEnv : !app.isPackaged;\n\n\n//# sourceURL=webpack:///./node_modules/electron-is-dev/index.js?");

/***/ }),

/***/ "./src/electron.js":
/*!*************************!*\
  !*** ./src/electron.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var electron_is_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron-is-dev */ \"./node_modules/electron-is-dev/index.js\");\n/* harmony import */ var electron_is_dev__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron_is_dev__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar window;\n\nfunction createWindow() {\n  // Create the browser window.\n  var win = new electron__WEBPACK_IMPORTED_MODULE_0__[\"BrowserWindow\"]({\n    webPreferences: {\n      nodeIntegration: true\n    }\n  });\n  electron__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"].setApplicationMenu(null);\n  win.maximize(true); // and load the index.html of the app.\n\n  electron_is_dev__WEBPACK_IMPORTED_MODULE_1___default.a ? win.loadURL(\"http://127.0.0.1:8001\") : win.loadFile(\"build/renderer/index.html\"); // Open the DevTools.\n\n  win.webContents.openDevTools();\n  electron__WEBPACK_IMPORTED_MODULE_0__[\"globalShortcut\"].register('CommandOrControl+I', function () {\n    console.log('Opening the dev tools');\n    if (electron_is_dev__WEBPACK_IMPORTED_MODULE_1___default.a) win.webContents.openDevTools();\n  });\n  return win;\n} // This method will be called when Electron has finished\n// initialization and is ready to create browser windows.\n// Some APIs can only be used after this event occurs.\n\n\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].whenReady().then(createWindow);\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on(\"quit\", function () {\n  process.exit(0);\n}); // Quit when all windows are closed.\n\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('window-all-closed', function () {\n  // On macOS it is common for applications and their menu bar\n  // to stay active until the user quits explicitly with Cmd + Q\n  if (process.platform !== 'darwin') {\n    electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].quit();\n  }\n});\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('activate', function () {\n  // On macOS it's common to re-create a window in the app when the\n  // dock icon is clicked and there are no other windows open.\n  if (electron__WEBPACK_IMPORTED_MODULE_0__[\"BrowserWindow\"].getAllWindows().length === 0) {\n    window = createWindow();\n  }\n}); // In this file you can include the rest of your app's specific main process\n// code. You can also put them in separate files and require them here.\n\n//# sourceURL=webpack:///./src/electron.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ })

/******/ });