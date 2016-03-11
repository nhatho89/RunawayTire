(function() {
  if(typeof window.RunawayTire === "undefined") {
    window.RunawayTire = {};
  }

  var RunawayTire = window.RunawayTire;

  var Obstacle = RunawayTire.Obstacle = function(game, speed) {
    this.obstacleHeight = 60;
    this.obstacleWidth = 120;
    this.railObstacleHeight = 200;
    this.railObstacleWidth = 100;
    this.obstacleLoop;


    this.generateElement(speed);
  };

  Obstacle.prototype.generateElement = function (speed) {
    var objects = [$('.obstacle'),$('.obstacle-railroad'),$('.obstacle-street-light')];


    console.log(speed);
      this.obstacleLoop = setInterval(function() {
        // debugger
        var rand = Math.floor((Math.random() * objects.length));
        objects[rand].animate({ right: $(window).width() + 'px' }, speed, 'linear', function() {
          $(this).css({ right: - $(this).width() + 'px' });
        });
      },speed);



  };




}());
