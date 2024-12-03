
class Animal {
	constructor(species){
		this.species=species
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`)
	}
}

class Dog extends Animal {
	constructor(species){
		super(species)
	}
	bark(){
		console.log(`woof`)
	}
}

class Cat extends Animal {
	constructor(species){
		super(species)
	}
	purr(){
		console.log(`purr`)
	}
}
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr
const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof

window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
