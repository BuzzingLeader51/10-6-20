function Person(first, last, age, interests, img) {
  this.name = {
    'first': first, 
    'last': last
  };
  this.age = age;
  this.interests = interests;
  this.img = img;
}


let bob = new Person('Bob', "Sponge", 20, ['jellyfishing', 'Sandy', 'friendship'], "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
)
console.log(bob.img)
document.getElementById("person").src = bob.img

//let Patrick = new Person('Patrick', "Star", 20, ['sleeping', 'eating', 'fun'])

//console.log(Patrick.name['first'])



function Math(num1, num2, operator) {
  this.num1 = num1;
  this.num2 = num2;
  
}

Math.prototype.subtract =  function() {
    return this.num1 - this.num2
}

problem = new Math(1,2)

console.log(problem.add())
console.log(problem.subtract())