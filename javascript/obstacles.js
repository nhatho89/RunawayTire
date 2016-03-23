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

    this.generateElement(speed);
  };

  Obstacle.prototype.generateElement = function (speed) {
    $('.motivation').html("");
    var objects = [$('.obstacle'),$('.obstacle-railroad'),$('.obstacle-street-light')];
    function shuffle(arr) {
      var shuffledArr = arr.slice();
      var j, x, i;
      for (i = shuffledArr.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = shuffledArr[i - 1];
        shuffledArr[i - 1] = shuffledArr[j];
        shuffledArr[j] = x;
      }
      return shuffledArr;
    };


      var that = this;
      var motivation = [
        "Keep on ROLLIN!!",
        "Your skills are kind of 'flat'",
        "Are you 'tired' yet? LOL!",
        "The road is dangerous, 'tread' carefully",
        "This is too easy, don't let your ego get 'inflated'",
        "'Pressure' getting to you? LOL!",
        "Can you 'spare' some time to read this?",
        "You've played this too much, I think its time to 'retire'",
        "Bob Stone was incompetent so Jim had to 'Fire Stone'",
        "You are going to have a 'Good Year'",
        "You won't get very far with 'flattery",
        "Did you go out today wearing that 'attire'?",
        "Do you feel a very strong 'attraction' between us? No? =[",
        "These puns are 'tireable'",
        "You are 'wheely' good!",
        "Do you ever feel like you're head is just spinning?",
        "Did this guy really re-invent Google Dinosaur game?",
        "Bored? 'Ramp' it up and play on hard!"

      ]

      var noRepeatTracker = [];
      this.obstacleLoop = setInterval(function() {
        if (noRepeatTracker.length === 0) {
          noRepeatTracker = shuffle(motivation);
        }


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
          $('.motivation').html(noRepeatTracker[noRepeatTracker.length-1]);
          noRepeatTracker.pop();
        };



      },speed);



  };




}());
