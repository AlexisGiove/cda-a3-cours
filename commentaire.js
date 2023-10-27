var bouton = document.querySelector("button");
bouton.addEventListener("click", () => {
  var commentaire = document.querySelector("#commentaire");
  var comments = document.querySelector("#comments");
  // comments.innerHTML += `<p>${commentaire.value} </p>`
  var p = document.createElement("p");
  p.innerHTML = commentaire.value;
  comments.appendChild(p);
  commentaire.value = "";
});
var somme = (a = 0, b = 0) => {
  var resultat = a + b;
  return resultat;
};

// var somme = function (a = 0, b = 0) {
//     return a + b
// }
console.log(somme());
console.log(somme(2));
console.log(somme(2, 3));
