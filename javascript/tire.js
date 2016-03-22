(function() {
  if(typeof window.RunawayTire === "undefined") {
    window.RunawayTire = {};
  }

  var RunawayTire = window.RunawayTire;


 var Tire = RunawayTire.Tire = function(tireElement) {
    this.htmlElement = tireElement;
  }

  Tire.prototype.jump = function () {

    console.log("jump!");
    this.htmlElement.style.bottom = "150px";

    window.setTimeout(function () {
      this.htmlElement.style.bottom = "0px";
    }.bind(this), 500 )
  };

  Tire.prototype.duck = function () {
    $( "#tire-img" ).replaceWith( "<img src='./tire-duck.png' class='tire-duck' />" );
    // debugger
    this.htmlElement.style.bottom = "-30px";
  };

  Tire.prototype.unduck = function () {
    $( ".tire-duck" ).replaceWith( "<img src='./tire-1.png' id='tire-img' />" );
    this.htmlElement.style.bottom = "0px";
  };

  Tire.prototype.shrink = function () {
    $( "#tire-img" ).animate({'width': 1},80);
    $( "#tire-img" ).animate({'height': 1},150);
    $( "#tire" ).animate({'bottom': -225},10);

    // this.htmlElement.style.bottom = "600px";

  };

  Tire.prototype.unShrink = function () {
    $( "#tire" ).animate({'bottom': 0},100);
    $( "#tire-img" ).animate({'width': 100},100);
    $( "#tire-img" ).animate({'height': 100},200);
  };


}());
