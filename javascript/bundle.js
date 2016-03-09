/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Game = __webpack_require__(1);
	var Tire = __webpack_require__(2);
	var Obstacles = __webpack_require__(3);
	
	$(document).addEventListener("ondocumentready", function() {
	  debugger;
	
	  //grabs tire image from dom by id and set it to tireElement
	  var tireElement = document.getElementById("tire");
	  var tire = new Tire(tireElement);
	  var gameWindow = document.getElementById("game-window");
	  var makeJump = true;
	});
	
	$(document).addEventListener("keydown", function(event){
	  //triggers the jumping function
	  if (event.keyCode === 32) {
	    event.preventDefault();
	    if (makeJump) {
	      tire.jump();
	    }
	    makeJump = false;
	  }
	
	  //triggers ducking function
	  if (event.keyCode === 40) {
	    event.preventDefault();
	    tire.duck();
	  }
	});
	
	$(document).addEventListener("keyup", function(event){
	  makeJump = true;
	
	    //revert to rolling position after ducking
	  if (event.keyCode === 40) {
	    event.preventDefault();
	    tire.unduck();
	  }
	
	});


/***/ },
/* 1 */
/***/ function(module, exports) {



/***/ },
/* 2 */
/***/ function(module, exports) {

	var Tire = function(tireElement) {
	  this.htmlElement = tireElement;
	  this.addListeners();
	}
	
	Tire.prototype.jump = function () {
	  debugger
	  this.htmlElement.style.bottom = "100px";
	
	  window.setTimeout(function () {
	    this.htmlElement.style.bottom = "0px";
	  }.bind(this), 500)
	};
	
	
	module.exports = Tire;


/***/ },
/* 3 */
/***/ function(module, exports) {



/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map