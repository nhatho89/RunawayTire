var Tire = function(tireElement) {
  this.htmlElement = tireElement;
  this.addListeners();
}

Tire.prototype.jump = function () {
  debugger
  this.htmlElement.style.bottom = "100px";

  window.setTimeout(function () {
    this.htmlElement.style.bottom = "0px";
  }.bind(this), 500)
};


module.exports = Tire;
