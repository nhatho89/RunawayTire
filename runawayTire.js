var Game = require('./javascript/game.js');
var Tire = require('./javascript/tire.js');
var Obstacles = require('./javascript/obstacles.js');

$(document).ready(function() {
  var tireElement = document.getElementById("tire");
  var tire = new Tire(tireElement);
  var gameField = document.getElementById("game-field");
  var makeJump = true;

  var startButtons = document.getElementsByClassName("level-button");
  for (var i = 0; i < startButtons.length; i++) {
    startButtons[i].addEventListener("click", function(e){
      var game = new Game(e.target.value);
      //starts the game
        if (!game.started) {
          game.start();
        }

    });
  }



  document.addEventListener("keydown", function(event){
    //triggers the jumping function
    if (event.keyCode === 40) {
      event.preventDefault();
      tire.duck();
    }
    //triggers ducking function
    if (event.keyCode === 32) {
      event.preventDefault();
      if (makeJump) {
        tire.jump();
      }
      makeJump = false;
    }
  });

  document.addEventListener("keyup", function(event){
    makeJump = true;

    //revert to rolling position after ducking
    if (event.keyCode === 40) {
      event.preventDefault();
      tire.unduck();
    }

  });

});
