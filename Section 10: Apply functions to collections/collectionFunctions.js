const print = (title, str) => console.log(`${title}:`, str);
const ingredients = {
  "Rock Mushroom": "Def Up",
  "Spirit Bloom": "Mag Up",
  "Fire Flower": "Atk Up"
};

for (let effect of Object.values(ingredients)) {
  console.log(`The effect is : ${effect}`);
};

console.log();

const randomNumbers = [];
for (let i = 0; i < 5; i++) {
  let rand = Math.floor(Math.random() * 100);
  randomNumbers.push(rand);
}
console.log("Random Numbers:", randomNumbers);

console.log("First number larger than 65:", randomNumbers.find(num => num > 65));

const evenRandomNumbers = randomNumbers.filter(num => num % 2 === 0);
print("Even Random Numbers", evenRandomNumbers);

console.log("Some numbers larger than 70?", randomNumbers.some(num => num > 70));
console.log("Every number larger than 30?", randomNumbers.every(num => num > 30));

const ascendingRandomNumbers = randomNumbers.slice().sort((a, b) => a - b);
console.log("Numbers in ascending order:", ascendingRandomNumbers);

const randomNumbersSum = randomNumbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Sum:", randomNumbersSum);
const randomNumbersProduct = randomNumbers.reduce((total, currentValue) => {
  return total * currentValue
});
console.log("Product:", randomNumbersProduct);

const maxNumber = randomNumbers.reduce((max, currVal) => {
  if (currVal > max) return currVal;
  return max;
});
console.log("Highest number:", maxNumber)