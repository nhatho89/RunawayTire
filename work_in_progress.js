Game.prototype.stop = function () {
  var finalScore = document.getElementById("final-score");
  finalScore.innerHTML = this.score;
  $("#scoreboard").show();
  window.clearInterval(this.timeInterval);
  window.clearInterval(this.collisionInterval);
  window.clearInterval(this.obstacleInterval);
  // this.obstacle.endGame()
  // window.clearInterval(this.obstacle.obstacleLoop);

  this.started = false;
  this.score = 0;
  window.clearInterval(this.objects[0].obstacleLoop);

  $('.obstacle-railroad').replaceWith("<div class='obstacle-railroad'><img src='./Images/railroad-cross.png' class='railroad'></img></div>");
  $('.obstacle-').replaceWith("<div class='obstacle'><img src='./Images/tire-spike-burned.png' class='spikes'></img></div>");;
  this.objects = [];
  $('.obstacle-railroad').css({position: 'absolute', width: '100px', right: '-100px', height: '400px', bottom: '-240px'});
  $('.obstacle').css({position: 'absolute', width: '150px', right: '-200px', overflow: 'hidden', bottom: '-20px'});

  // $('.obstacle').animate({ right: $(window).width() + 'px' }, 1500, 'linear', function() {
  //   $(this).css({ right: - $(this).width() + 'px' });
  // });


  // this.obstacles = [];


};


var Obstacle = RunawayTire.Obstacle = function(game, difficulty) {
  this.obstacleHeight = 60;
  this.obstacleWidth = 120;
  this.railObstacleHeight = 200;
  this.railObstacleWidth = 100;
  this.obstacleLoop;


  this.difficulty = difficulty;
  this.game = game;
  this.generateElement();
};

Obstacle.prototype.generateElement = function () {
  var objects = [$('.obstacle'),$('.obstacle-railroad')];
  var that = this;
  var speed;
  switch(that.difficulty) {
    case 'easy':
    speed = 2000;
    break;
    case 'medium':
    speed = 1700;
    break;
    case 'hard':
    speed = 900;
    break;
  }
  console.log(speed);
    this.obstacleLoop = 0;
    this.obstacleLoop = window.setInterval(function() {
      // debugger
      var rand = [Math.floor(Math.random() * objects.length)];
      objects[rand[0]].animate({ right: $(window).width() + 'px' }, speed, 'linear', function() {
        $(this).css({ right: - $(this).width() + 'px' });

      });
    }, speed);



};

// Obstacle.prototype.endGame = function() {
//   window.clearInterval(this.obstacleLoop);
//   $('.obstacle-railroad').finish();
//   $('.obstacle').finish();
//   // $('.obstacle-railroad').stop();
//   // $('.obstacle').stop();
//   // $('.obstacle').css({right: "-200px"});
//   // $('.obstacle-railroad').css({right: "-100px"});
// };
