// define a constructor function
function Banana(diameter, length) {
  this.color = "yellow";
  this.diameter = diameter;
  this.length = length;
  this.yummy = true;
  // add a rot method to constructor
  this.rot = function () {
    console.log("all bananas can rot");
  };
}

// I believe the reason I did not pass all the tests is I didn't create new objects from constructor
let banana1 = new Banana(1, 2);
console.log(banana1);
banana1.rot();

let banana2 = new Banana(3, 5);
console.log(banana2);
banana2.rot();
