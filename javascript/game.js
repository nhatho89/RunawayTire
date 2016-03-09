(function() {
  if(typeof window.RunawayTire === "undefined") {
    window.RunawayTire = {};
  }

  var RunawayTire = window.RunawayTire;

  var Game = RunawayTire.Game = function(tire) {
    this.tire = tire;
    this.score = 0;
    this.started = false;
    // this.gameWindow = document.getElementById("game-window");
    this.startButton = document.getElementsByClassName("start-button");
    this.makeJump = true;

    document.addEventListener("keyup", function(e) {
      this.handleDuck(e);
    }.bind(this));

    document.addEventListener( "keydown", function(e){
      this.handleJump(e);
    }.bind(this));


    document.addEventListener("click", function(e){
      var game = new RunawayTire.Game(e.target.value);
      if (!this.started) {
        this.start();
      }
    }.bind(this));

  };

  // document.click(this.handleClickEvent.bind(this));

  Game.prototype.start = function () {
    $("#welcome-message").hide();
    $("#scoreboard").hide();
    this.started = true;
    this.timeInterval = window.setInterval(this.incrementScore.bind(this), 50);
    // this.collisionInterval = window.setInterval(this.checkCollision.bind(this), 10);
    // this.init();
  };


  Game.prototype.handleJump = function(event) {
    console.log(event.keyCode);
    if (event.keyCode === 32) {
      console.log("keypressed" + event.keyCode);
      this.tire.jump();
    };

    //triggers ducking function
    if (event.keyCode === 83) {

      event.preventDefault();
      this.tire.duck();
    }

  };

  Game.prototype.handleDuck = function(event) {
    console.log("key up" + event.keyCode);
    if (event.keyCode === 83) {

      event.preventDefault();
      this.tire.unduck();
    }
  };

  Game.prototype.incrementScore = function () {
    this.score += 1;
    var scoreLabel = document.getElementById("score");
    scoreLabel.innerHTML = this.score;
  };

}());
