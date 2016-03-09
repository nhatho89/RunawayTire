(function() {
  if(typeof window.RunawayTire === "undefined") {
    window.RunawayTire = {};
  }

  var RunawayTire = window.RunawayTire;
  // var Game = window.Game;

  var Game = RunawayTire.Game = function(tire) {


    // grabs tire image from dom by id and set it to tireElement
    this.tire = tire;
    this.gameWindow = document.getElementById("game-window");
    this.makeJump = true;
    // this.bindEvents();
    document.addEventListener( "keypress", function(e){
      this.handleJump(e);
    }.bind(this));
  };



  // Game.prototype.bindEvents = function() {
  //
  //   $('document').keypress(this.handleJump(event));
  // };

  Game.prototype.handleJump = function(event) {
    // event.preventDefault();
    if (event.keyCode === 32) {

      if (this.makeJump) {

        console.log("keypressed");

        this.tire.jump();
      }
      
    };

    //triggers ducking function
    if (event.keyCode === 40) {
      event.preventDefault();
      tire.duck();
    }
  }





  // document.addEventListener("keydown", function(event){
  //   //triggers the jumping function
  //   if (event.keyCode === 32) {
  //     event.preventDefault();
  //     debugger
  //     if (Game.makeJump) {
  //       debugger
  //       Game.jump();
  //     }
  //     Game.makeJump = false;
  //   }
  //
  //   //triggers ducking function
  //   if (event.keyCode === 40) {
  //     event.preventDefault();
  //     tire.duck();
  //   }
  // });

}());
