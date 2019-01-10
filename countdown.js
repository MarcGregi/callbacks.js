var countdownGenerator = function (x) {
  var num = x;
  return function() {
    if (num > 0) {
      console.log("T-minus " + num);
      num -= 1;
    } else if (num === 0) {
      console.log("Blast Off!");
      num -= 1;
    } else {
      console.log("Rockets already gone, bub!")
    }
  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!