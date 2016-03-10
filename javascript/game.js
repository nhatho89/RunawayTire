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
  this.duck = false;

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


Game.prototype.start = function () {
  $("#welcome-message").hide();
  $("#scoreboard").hide();
  this.started = true;
  this.timeInterval = window.setInterval(this.incrementScore.bind(this), 50);
  this.collisionInterval = window.setInterval(this.checkCollision.bind(this), 10);
  this.obstacle = new RunawayTire.Obstacle(this);
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
  // $('.obstacle').animate({ right: $(window).width() + 'px' }, 1500, 'linear', function() {
  //   $(this).css({ right: - $(this).width() + 'px' });
  // });


  // this.obstacles = [];


};

Game.prototype.checkCollision = function () {
  //if collision is true, stop game

    // var obstacle = $('.obstacle');
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
    if ((event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 87) && ($("#tire-img" ).offset().top > 320)) {
      console.log("keypressed" + event.keyCode);
      this.tire.jump();

    };
    //triggers ducking function
    if ((!this.duck) && (event.keyCode === 83 || event.keyCode === 40)) {

      event.preventDefault();
      this.duck = true;
      this.tire.duck();
    }

    if (event.keyCode === 13) {

      event.preventDefault();
      this.start();
    }

  };

  Game.prototype.handleDuck = function(event) {
    console.log("key up" + event.keyCode);
    if (event.keyCode === 83 || event.keyCode === 40) {

      event.preventDefault();
      this.duck = false;
      this.tire.unduck();
    }
  };

  Game.prototype.incrementScore = function () {
    this.score += 1;
    var scoreLabel = document.getElementById("score");
    scoreLabel.innerHTML = this.score;
  };

}());
