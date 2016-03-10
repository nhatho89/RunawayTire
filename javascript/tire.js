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
    }.bind(this), 300 )
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


}());
