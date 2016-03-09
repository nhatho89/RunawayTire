(function() {
  if(typeof window.RunawayTire === "undefined") {
    window.RunawayTire = {};
  }

  var RunawayTire = window.RunawayTire;

  var Game = RunawayTire.Game = function(tire) {
    this.tire = tire;
    this.score = 0;
    this.started = false;
    this.startButton = document.getElementsByClassName("start-button");
    this.makeJump = true;
    this.obstacles = [];
    this.window = document.getElementById("game-window");

    document.addEventListener("keyup", function(e) {
      this.handleDuck(e);
    }.bind(this));

    document.addEventListener( "keydown", function(e){
      this.handleJump(e);
    }.bind(this));

    $(".start-button").click(function(e){
      var game = new RunawayTire.Game(e.target.value);
      if (!this.started) {
        this.start();
      }
    }.bind(this));


  };

  Game.prototype.createObstacle = function () {

    var obstacle = new RunawayTire.Obstacle(this);

    //add the obstacle to the Game's queue of obstacles
    this.addObstacle(obstacle.domElement);

    //append obstacle to game-window
    this.window.appendChild(obstacle.domElement);

    //10ms after obstacle is created, slide it
    window.setTimeout(function() {
      obstacle.slide();
    }.bind(this), 10);

  };

  Game.prototype.addObstacle = function (obstacle) {
    this.obstacles.push(obstacle);
    console.log("Length: " + this.obstacles.length);
  };

  Game.prototype.initialize = function () {
    var generateObstacles = function() {
      this.createObstacle();
      var rand = Math.floor((Math.random() * 1000) + 1500);
      console.log("Interval: " + rand);
      this.obstacleInterval = window.setTimeout(generateObstacles, rand);
    }.bind(this);

    generateObstacles();
  };


  Game.prototype.start = function () {
    $("#welcome-message").hide();
    $("#scoreboard").hide();
    this.started = true;
    this.timeInterval = window.setInterval(this.incrementScore.bind(this), 50);
    // this.collisionInterval = window.setInterval(this.checkCollision.bind(this), 10);
    this.initialize();
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

    if (event.keyCode === 13) {

      event.preventDefault();
      this.start();
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
