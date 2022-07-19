const obj = {
  nom: "from scratch",
  ville: "bordeau",

  direBonjour: function () {
    console.log("Bonjour je suis" + this.pseudo);
  },

  //   direBonjour() {
  //     console.log("bonjour " + this.pseudo);
  //   },
};

//ajouter
obj.age = 24;
obj["admin"] = true;

//Modifier
obj.pseudo = "FS";

//delete
delete obj.ville;

//checker si propriété éxiste
// console.log("ville" in obj);

//Parcourir un object
for (const key in obj) {
  // console.log(key + " : " + obj[key]);
}
// console.log(obj.direBonjour());

// ------------------------------------------------------

// les méthode native Object

//Obtenir les clés d'un object
const keys = Object.keys(obj);
// console.log(keys);

// Obtenir les valeurs
const valeurs = Object.values(obj);
// console.log(valeurs);

//décompose les éléments dans un tableau
const nestedArray = Object.entries(obj);
// console.log(nestedArray);

//fusionner Objects
const obj2 = {
  taille: "1m80",
  poids: "75kg",
};
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

//empêche les modifiactions
// const newObj = Object.freeze(obj);
// newObj.pseudo = "Test";
// newObj.adresse = "42 avenue du code";

// console.log(newObj);

//la méthode seal
const newObj = Object.seal(obj);
newObj.pseudo = "Test";
newObj.adresse = "42 avenue du code";

console.log(newObj);
