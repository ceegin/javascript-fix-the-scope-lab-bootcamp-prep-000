var animal = 'dog'
var animal2 = 'cat'
function myAnimal() {
  return animal;
}
myAnimal(animal);
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal2;
}
yourAnimal();
var add2 = function add2(n) {
  const two = 2;
  return n + two

  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFUNK = funkyFunction(function())
