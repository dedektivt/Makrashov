let calculator = {
  a: 0,
  b: 0,
  
  read: function(x, y) {
    this.a = x;
    this.b = y;
  },
  
  sum: function() {
    return this.a + this.b;
  },
  
  mul: function() {
    return this.a * this.b;
  },
  
  div: function() {
    return this.a / this.b;
  }
};

// Использование
calculator.read(10, 5);
console.log(calculator.sum()); // 15
console.log(calculator.mul()); // 50
console.log(calculator.div()); // 2