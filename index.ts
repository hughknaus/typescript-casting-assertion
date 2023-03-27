// Import stylesheets
import './style.css';

export class Animal {
  legs: number;
  tail: boolean;
  hair: boolean;

  constructor(legs?, tail?, hair?) {
    console.log(`Animal constructor:`, legs, tail, hair);
    this.legs = legs;
    this.tail = tail;
    this.hair = hair;
  }
}

export class Dog extends Animal {
  constructor(legs?, tail?) {
    super(legs, tail);
    console.log(`Dog constructor:`, legs, tail);
    this.legs = legs;
    this.tail = tail;
  }
}

let dog1 = new Dog(4, true);
let animal1 = new Animal(2, true, true);
let animal2 = dog1 as Animal;
let animal3 = { legs: 4, tail: true } as Animal;
let animal4 = /** @type {Animal} */ (dog1);
let animal5 = Object.assign({} as Animal, dog1);
let animal6 = Object.assign(new Animal(), dog1);
let animal7 = { ...dog1, hair: true } as Animal;
let animal8 = /** @type {Animal} */ { ...dog1, hair: true };

const merge = (...objects): Animal =>
  objects.reduce((acc, cur): Animal => ({ ...acc, ...cur } as Animal));

let animal9: Animal = merge(dog1, { hair: true });

console.log(`dog1 is `, dog1 instanceof Dog); // true  -- true
console.log(`animal1 is `, animal1 instanceof Animal); // false -- true
console.log(`animal2 is `, animal2 instanceof Animal); // false -- true
console.log(`animal3 is `, animal3 instanceof Animal); // false -- false
console.log(`animal4 is `, animal4 instanceof Animal); // false -- true
console.log(`animal5 is `, animal5 instanceof Animal); // false -- false
console.log(`animal6 is `, animal6 instanceof Animal); // true -- true
console.log(`animal7 is `, animal7 instanceof Animal); // false -- false
console.log(`animal8 is `, animal8 instanceof Animal); // false -- false
console.log(`animal9 is `, animal9 instanceof Animal); // false -- false

console.log(`animal9 is `, animal9); // false -- false
