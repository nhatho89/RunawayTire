(function() {
  if(typeof window.RunawayTire === "undefined") {
    window.RunawayTire = {};
  }

  var RunawayTire = window.RunawayTire;

var Game = RunawayTire.Game = function(tire) {
  this.tire = tire;
  this.teleport = false;
  this.score = 0;
  this.started = false;
  this.startButton = document.getElementsByClassName("start-button");
  this.duck = false;

  this.window = document.getElementById("game-window");

  document.addEventListener("keyup", function(e) {
    this.handleDuck(e);
  }.bind(this));

  document.addEventListener( "keydown", function(e){
    this.handleJump(e);
  }.bind(this));



  $(".start-button").click(function(e){
    console.log(e.target.value);
    if (!this.started) {
      this.start(e.target.value);
    }
  }.bind(this));


};


Game.prototype.start = function (difficulty) {
  $("#welcome-message").hide();
  $("#scoreboard").hide();

  var pointIncrements;
  var speed;
  switch(difficulty) {
    case 'easy':
    pointIncrements = 100;
    speed = 2000;
    break;
    case 'medium':
    pointIncrements = 50;
    speed = 1600;
    break;
    case 'hard':
    pointIncrements = 20;
    speed = 900;
    break;
  }

  this.started = true;
  this.timeInterval = window.setInterval(this.incrementScore.bind(this), pointIncrements);
  this.collisionInterval = window.setInterval(this.checkCollision.bind(this), 10);
  this.obstacle = new RunawayTire.Obstacle(this, speed);
};

Game.prototype.stop = function () {
  var finalScore = document.getElementById("final-score");
  finalScore.innerHTML = this.score;
  $("#scoreboard").show();
  window.clearInterval(this.timeInterval);
  window.clearInterval(this.collisionInterval);
  window.clearInterval(this.obstacleInterval);

  window.clearInterval(this.obstacle.obstacleLoop);

  this.started = false;
  this.score = 0;
  


};

Game.prototype.checkCollision = function () {
  //if collision is true, stop game

    // var obstacle = $('.obstacle');
    // if (this.teleport) {
    //
    // }
    // else
    if (this.duck) {
      var tireLeft = $(".tire-duck" ).offset().left;
      var tireTop = $(".tire-duck" ).offset().top;
      var tireHeight = $(".tire-duck" ).outerHeight(true);
      var tireWidth = $(".tire-duck" ).outerWidth(true);
      var totalTireHeight = tireTop + tireHeight;
      var totalTireWidth = tireLeft + tireWidth;

      var obsLeft = $('.obstacle').offset().left;
      var obsTop = $('.obstacle').offset().top;
      var obsHeight = $('.obstacle').outerHeight(true);
      var obsWidth = $('.obstacle').outerWidth(true);
      var totalObsHeight = obsHeight + obsTop;
      var totalObsWidth = obsLeft + obsWidth;
    } else {

      var tireLeft = $("#tire-img" ).offset().left;
      var tireTop = $("#tire-img" ).offset().top;
      var tireHeight = $("#tire-img" ).outerHeight(true);
      var tireWidth = $("#tire-img" ).outerWidth(true);
      var totalTireHeight = tireTop + tireHeight;
      var totalTireWidth = tireLeft + tireWidth;

      var obsLeft = $('.obstacle-railroad').offset().left;
      var obsTop = $('.obstacle-railroad').offset().top;
      var obsHeight = $('.obstacle-railroad').outerHeight(true);
      var obsWidth = $('.obstacle-railroad').outerWidth(true);
      var totalObsHeight = obsHeight + obsTop;
      var totalObsWidth = obsLeft + obsWidth;
    }






    //if tire touches the obstacle from the top (squishes obstacle)
    var heightClearance = (totalTireHeight >= totalObsHeight);

    //horizontal
    var touching = obsLeft == (tireLeft + tireWidth);

    if ( (totalTireHeight < obsTop) ||
          (tireTop > totalObsHeight) ||
          ((totalTireWidth) < obsLeft) ||
          ((tireLeft + 35) > totalObsWidth)) {

    }
    else {
      this.stop();
    }


    if (!this.duck) {

      var tireLeft = $("#tire-img" ).offset().left;
      var tireTop = $("#tire-img" ).offset().top;
      var tireHeight = $("#tire-img" ).outerHeight(true);
      var tireWidth = $("#tire-img" ).outerWidth(true);
      var totalTireHeight = tireTop + tireHeight;
      var totalTireWidth = tireLeft + tireWidth;

      var obsLeft = $('.obstacle').offset().left;
      var obsTop = $('.obstacle').offset().top;
      var obsHeight = $('.obstacle').outerHeight(true);
      var obsWidth = $('.obstacle').outerWidth(true);
      var totalObsHeight = obsHeight + obsTop;
      var totalObsWidth = obsLeft + obsWidth;
    }

    var heightClearance = (totalTireHeight >= totalObsHeight);

    //horizontal
    var touching = obsLeft == (tireLeft + tireWidth);

    if ( (totalTireHeight < obsTop) ||
          (tireTop > totalObsHeight) ||
          ((totalTireWidth) < obsLeft) ||
          ((tireLeft + 35) > totalObsWidth)) {

    }
    else {
      this.stop();
    }



};


  Game.prototype.handleJump = function(event) {
    // debugger
    console.log(event.keyCode);

    if ((event.keyCode === 38 || event.keyCode === 87) && ($("#tire-img" ).offset().top > 300)) {
      console.log("keyup" + event.keyCode);
      this.tire.jump();

    };
    //triggers ducking function
    if ((!this.duck) && (event.keyCode === 83 || event.keyCode === 40)) {
      this.duck = true;
      this.tire.duck();
    }

    if ($( "#tire-img" ).width() > 80 && event.keyCode === 32) {
      this.teleport = true;

      this.tire.shrink();
    }

    if (event.keyCode === 13) {
      this.start('medium');
    }

  };

  Game.prototype.handleDuck = function(event) {
    console.log("key up" + event.keyCode);
    if (event.keyCode === 83 || event.keyCode === 40) {

      this.duck = false;
      this.tire.unduck();
    }

    if (event.keyCode === 32) {
      this.tire.unShrink();
      this.teleport = false;
    }
  };

  Game.prototype.incrementScore = function () {
    this.score += 1;
    var scoreLabel = document.getElementById("score");
    scoreLabel.innerHTML = this.score;
  };

}());
