var Game = require('./javascript/game');
var Tire = require('./javascript/tire');
var Obstacles = require('./javascript/obstacles');

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
