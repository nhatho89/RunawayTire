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

    if (!this.started) {
      this.start(e.target.value);
    }
  }.bind(this));


};


Game.prototype.start = function (difficulty) {
  $("#welcome-message").hide();
  $("#scoreboard").hide();
  this.score = 0;

  var pointIncrements;
  var speed;
  switch(difficulty) {
    case 'easy':
    pointIncrements = 100;
    speed = 2800;
    break;
    case 'medium':
    pointIncrements = 50;
    speed = 2400;
    break;
    case 'hard':
    pointIncrements = 20;
    speed = 2000;
    break;
  }

  this.gameCount = 3;
  var that = this;
  this.startCount = setInterval(function() {
    $('.motivation').html("Game Starts In: " + that.gameCount);
    that.gameCount -= 1;
  },1000);


  setTimeout(function(){
    window.clearInterval(that.startCount);
    that.obstacle = new RunawayTire.Obstacle(that, speed);
    that.timeInterval = window.setInterval(that.incrementScore.bind(that), pointIncrements);
  }, 4000);

  this.started = true;
  // this.timeInterval = window.setInterval(this.incrementScore.bind(this), pointIncrements);
  this.collisionInterval = window.setInterval(this.checkCollision.bind(this), 10);

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
  $('.motivation').html("");
  $('.easy-instruction').html("");




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

    var lightLeft = $('.obstacle-street-light').offset().left;
    var lightTop = $('.obstacle-street-light').offset().top;
    var lightHeight = $('.obstacle-street-light').outerHeight(true);
    var lightWidth = $('.obstacle-street-light').outerWidth(true);
    var totalLightHeight = lightHeight + lightTop;
    var totalLightWidth = lightLeft + lightWidth;

    if ( (totalTireHeight < lightTop) ||
          (tireTop > totalLightHeight) ||
          ((totalTireWidth) < lightLeft) ||
          ((tireLeft + 35) > totalLightWidth)) {

    }
    else {
      this.stop();
    }



};


  Game.prototype.handleJump = function(event) {
    // debugger


    if ((event.keyCode === 38 || event.keyCode === 87) && ($("#tire-img" ).offset().top > 320)) {

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
