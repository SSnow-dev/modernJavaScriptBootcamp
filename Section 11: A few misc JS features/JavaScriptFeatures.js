const arr1 = [1, 2, 3, 4];

function printIt(...nums) {
  console.log(nums);
  nums.forEach(num => console.log(num));
}

printIt(...arr1);
printIt("Hi", "OK", "Why not");

function sum(...nums) {
  return nums.reduce((total, current) => total + current);
}

printIt(sum(1, 3, 6));
printIt(sum(1, 3, 6, 22, 15, 7, 8, 4, 10));
printIt(sum(...arr1));

const multiply = (...nums) => nums.reduce((total, current) => total * current)

console.log(multiply(5, 5, 5, 10, 10));

printIt(multiply(sum(...arr1), multiply(sum(1, 3), sum(5, 6, sum(3, 8)))));

obj1 = {
  0:"zero",
  1:"one",
  2:"two",
  3:"three"
}

const {0: first, 1: second, ...other} = obj1;

console.log(first, second, other);

function destructure({
  0: gold,
  1: silver,
  2: bronze
}) {
  console.log(gold, silver, bronze);
}

destructure(obj1);