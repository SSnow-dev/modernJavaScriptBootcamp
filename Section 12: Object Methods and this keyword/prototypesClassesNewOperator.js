//Factory function
function makeDog(name, age, breed) {
  const dog = {};
  dog.name = name;
  dog.age = age;
  dog.breed = breed;
  dog.printInfo = function () {
    const { name, age, breed } = this;
    console.log(`Name: ${name}, Age: ${age}, Breed: ${breed}`);
  }
  return dog;
}

const backgroundColor = "rgb(44, 44, 66)";

const luke = makeDog("Luke", "4", "Schnauzer");
const shadow = makeDog("Shadow", "3", "Pomchi");

console.log(luke);

//prototype example
String.prototype.yell = function() {
  return this.toUpperCase();
}

console.log(luke.name.yell());

luke.printInfo();
shadow.printInfo();

//constructor
// function Dog(name, age, breed) {
//   this.name = name;
//   this.age = age;
//   this.breed = breed;
// }

// Dog.prototype.printInfo = function () {
//   const { name, age, breed } = this;
//   console.log(`Name: ${name}, Age: ${age}, Breed: ${breed}`);
// }


// const luke2 = new Dog("Luke", "4", "Schnauzer");
// console.log(luke2);
// luke2.printInfo();

// const pogo = new Dog("Pogo", "2", "Corgi");
// pogo.printInfo();


//classes
console.log("==========CLASSES==========");
class Pet {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
  printInfo () {
    const { name, age, breed } = this;
    console.log(`Name: ${name}, Age: ${age}, Breed: ${breed}`);
  }
  eat () {
    return `${this.name} is eating!`;
  }
}

//extends
class Dog extends Pet {
  bark() {
    return "WOOOOF!";
  }
}

//super
class Cat extends Pet {
  constructor(name, age, breed, livesLeft) {
    super(name, age, breed);
    this.livesLeft = livesLeft;
  }
  printInfo () {
    const { name, age, breed, livesLeft } = this;
    console.log(`Name: ${name}, Age: ${age}, Breed: ${breed} Lives Left: ${livesLeft}`);
  }
  meow() {
    return "MEOWW!";
  }
}

const classLuke = new Dog("Luke", "4", "Schnauzer");
console.log(classLuke);
classLuke.printInfo();

const classPogo = new Dog("Pogo", "3", "Corgi");
classPogo.printInfo();

console.log(classLuke.printInfo === classPogo.printInfo);

const whiskers = new Cat("Whiskers", "5", "Calico", 7);
whiskers.printInfo();
console.log(whiskers.meow());
