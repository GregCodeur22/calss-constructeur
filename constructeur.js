function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;
  this.getCity = function () {
    console.log(this.pseudo + " habibte à " + this.ville);
  };
}

const user1 = new User("From scratch", "Bordeaux");
const user2 = new User("greg", "lyon");

console.log(user1);
console.log(user2.getCity());

// --------------------------------------------------

//Factory functions
function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}
const user4 = User3("FS", "nice");
console.log(user4);

// --------------------------------------------------
//Class

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  sayMyName = function () {
    console.log("Bonjour je suis " + this.pseudo);
  };
}

const user5 = new Utilisateur("Samia", "lyon");

Utilisateur.prototype.sayCity = function () {
  console.log(this.pseudo + " habite à " + this.ville);
};

console.log(user5.sayCity());

let array = [1, 2, 3];
console.log(array.filter);

Object.assign(Utilisateur.prototype, {
  method1() {
    //Ma methode
  },
  methode2() {
    //Ma méthode
  },
});

// --------------------------------------------------

//l'héritage

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + "dit : " + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("le chien cours ! ");
  }
}

class Cat extends Animal {
  hunt() {
    console.log("j'ai tué un oiseau");
  }
}

const rintintin = new Dog("Rintintin", 9);
console.log(rintintin);
