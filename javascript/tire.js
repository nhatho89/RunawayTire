(function() {
  if(typeof window.RunawayTire === "undefined") {
    window.RunawayTire = {};
  }

  var RunawayTire = window.RunawayTire;


 var Tire = RunawayTire.Tire = function(tireElement) {
    this.htmlElement = tireElement;
  }

  Tire.prototype.addListeners = function () {
  };

  Tire.prototype.jump = function () {
    console.log("jump!");
    this.htmlElement.style.bottom = "100px";

    window.setTimeout(function () {
      this.htmlElement.style.bottom = "0px";
    }.bind(this), 500)
  };


}());
