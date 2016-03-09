(function() {
  if(typeof window.RunawayTire === "undefined") {
    window.RunawayTire = {};
  }

  var RunawayTire = window.RunawayTire;

  var Obstacle = RunawayTire.Obstacle = function(game) {
    this.obstacleHeight = 60;
    this.obstacleWidth = 120;

    this.game = game;
    this.domElement = this.generateElement();
  };

  Obstacle.prototype.generateElement = function () {

    var gameWindow = document.getElementById("game-window");

    var newObstacle = $('.obstacle');




    setInterval(function() {
      $('.obstacle').animate({ right: $(window).width() + 'px' }, 3000, 'linear', function() {
        $(this).css({ right: - $(this).width() + 'px' });
      });
    }, 10);

    return newObstacle;
  };


}());
