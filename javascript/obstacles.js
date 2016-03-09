(function() {
  if(typeof window.RunawayTire === "undefined") {
    window.RunawayTire = {};
  }

  var RunawayTire = window.RunawayTire;

  var Obstacle = RunawayTire.Obstacle = function(game) {
    this.obstacleHeight = Math.floor((Math.random() * 35) + 10);
    this.obstacleWidth = Math.floor((Math.random() * 35) + 10);

    this.game = game;
    this.domElement = this.generateElement();
  };

  Obstacle.prototype.generateElement = function () {
    var gameWindow = document.getElementById("game-window");
    var newObstacle = document.createElement("div");
    newObstacle.className = "obstacle";
    $('#theDiv').prepend('<img class="tire-spike" src="../Images/tire-spike.png" />');

    //When its transition is complete, remove it from the DOM
    //also remove it from the queue of obstacles
    newObstacle.addEventListener("transitionend", function(){
      gameWindow.removeChild(newObstacle);
      this.game.removeObstacle(newObstacle);
    }.bind(this));

    //set height and width
    newObstacle.style.height = this.obstacleHeight.toString() + "px";
    newObstacle.style.width = this.obstacleWidth.toString() + "px";

    //this.difficulty.speed is the speed of the transitions
    newObstacle.style.transition = "left 1.5s";
    newObstacle.style.transitionTimingFunction = "linear";

    //webkit
    newObstacle.style.setProperty("-webkit-transition", "left 1.5s");
    newObstacle.style.setProperty("-webkit-transition-timing-function", "linear");

    return newObstacle;
  };

  Obstacle.prototype.slide = function () {
    this.domElement.style.left = "0px";
  };


}());
