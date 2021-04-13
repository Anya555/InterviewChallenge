function Banana(diameter, length) {
  this.color = "yellow";
  this.diameter = diameter;
  this.length = length;
  this.yummy = true;
  this.rot = function () {
    return (this.yummy = false);
  };
}

let banana1 = new Banana(1, 2);
banana1.rot();

let banana2 = new Banana(3, 5);
banana2.rot();
