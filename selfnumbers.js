function sum_digits(n) {
    let s = 0;
    while (n) { //while n > 0
        s += n % 10; //setiap n bernilai 10 akan mengembalikan nilai 0
        n = Math.floor(n / 10); //setiap nilai decimal akan mengembalikan nilai 0
    }  
    return s;
}

function difference(a1, a2) {
  var result = [];
  for (var i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) === -1) {
      result.push(a1[i]);
    }
  }
  return result;
}

var selfNumbers = [];
var generatorNumbers = [];
var numbers = [];

for(i = 1; i <= 5000; i++) {
		g = i + sum_digits(i);
    generatorNumbers.push(g);
    numbers.push(i)
}

selfNumbers = difference(numbers, generatorNumbers);

function add(a, b) {
    return a + b;
}

var sum = selfNumbers.reduce(add, 0);

//document.getElementById("demo").innerHTML = selfNumbers;
document.getElementById("demo2").innerHTML = sum;



