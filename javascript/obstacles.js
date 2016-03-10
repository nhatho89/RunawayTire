(function() {
  if(typeof window.RunawayTire === "undefined") {
    window.RunawayTire = {};
  }

  var RunawayTire = window.RunawayTire;

  var Obstacle = RunawayTire.Obstacle = function(game) {
    this.obstacleHeight = 60;
    this.obstacleWidth = 120;
    this.railObstacleHeight = 200;
    this.railObstacleWidth = 100;
    this.obstacleLoop;

    this.game = game;
    this.generateElement();
  };

  Obstacle.prototype.generateElement = function () {
    var objects = [$('.obstacle'),$('.obstacle-railroad')];

      this.obstacleLoop = setInterval(function() {
        var rand = Math.floor((Math.random() * objects.length));
        objects[rand].animate({ right: $(window).width() + 'px' }, 1500, 'linear', function() {
          $(this).css({ right: - $(this).width() + 'px' });
        });
      }, 1500);



  };




}());
