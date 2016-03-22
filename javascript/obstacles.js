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
    this.count = 0;

    
    // this.gameCount = 3;
    // var that = this;
    // this.startCount = setInterval(function() {
    //   $('.motivation').html("Game Starts In: " + that.gameCount);
    //   that.gameCount -= 1;
    // },1000);
    //

    // setTimeout(function(){ that.generateElement(speed); }, 4000);
    this.generateElement(speed);
  };

  Obstacle.prototype.generateElement = function (speed) {
    $('.motivation').html("");
    // window.clearInterval(this.startCount);
    var objects = [$('.obstacle'),$('.obstacle-railroad'),$('.obstacle-street-light')];


    console.log(speed);
      var that = this;
      var motivation = ["Keep on ROLLIN!!", "Your skills are kind of 'flat'", "Are you 'tired' yet? LOL!", "The road is dangerous, 'tread' carefully", "This is too easy, don't let your ego get 'inflated'", "'Pressure' getting to you? LOL!", "Can you 'spare' some time to read this?", "You've played this too much, I think its time to 'retire'", "Bob Stone was incompetent so Jim had to 'Fire Stone'", "You are going to have a 'Good Year'"]
      this.obstacleLoop = setInterval(function() {
        var randMot = Math.floor((Math.random() * motivation.length));
        // debugger
        var rand = Math.floor((Math.random() * objects.length));
        objects[rand].animate({ right: $(window).width() + 'px' }, speed, 'linear', function() {
          $(this).css({ right: - $(this).width() + 'px' });
        });


        that.count += 1;
        if (speed === 2400) {
          switch (rand) {
            case 0:
            $('.easy-instruction').html("JUMP UP!");
            break;
            case 1:
            $('.easy-instruction').html("DUCK DOWN!");
            break;
            case 2:
            $('.easy-instruction').html("Hold Space Bar!");
            break;
          }
        };
        if (that.count % 4 === 0) {
          $('.motivation').html(motivation[randMot]);
        };



      },speed);



  };




}());
