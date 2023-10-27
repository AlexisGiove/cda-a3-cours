function afficherMessage() {
  alert("hello");
}

var intro = window.document.getElementById("intro");
// console.log(intro);
// console.log(intro.innerHTML);
// console.log(intro.textContent);

var rouges = document.getElementsByClassName("rouge");
// for (const rouge of rouges) {
//     console.log(rouge.innerHTML);
// }
var paragraphes = document.getElementsByTagName("p");
// for (const para of paragraphes) {
//     console.log(para.innerHTML);
// }

var notFirstParagraphes = document.querySelectorAll("p:not(:first-child)");
// for (const para of notFirstParagraphes) {
//     console.log(para.innerHTML);
// }

var notFirstParagraphe = document.querySelector("p:not(:first-child)");
// console.log(notFirstParagraphe.innerHTML);

function switchLink() {
  var lien = document.querySelector("a");
  // console.log(lien.getAttribute('href'));
  lien.href = "http://www.franceinfo.fr";
  //lien.setAttribute('href', 'http://www.franceinfo.fr')
  lien.innerHTML = "consulter l'actualité";
}

var premierParagraphe = document.querySelector("p");
premierParagraphe.style.fontStyle = "italic";
// console.log(premierParagraphe.classList);
// console.log(premierParagraphe.className);
// var classes = premierParagraphe.classList
// classes.remove('rouge')
// classes.add('bleu')
// classes.replace('rouge', 'bleu')
// classes.toggle('rouge')
// classes.toggle('bleu')
// console.log(classes.contains('rouge'));

function switchColor() {
  var paragraphes = document.getElementsByTagName("p");
  for (const paragraphe of paragraphes) {
    var classes = paragraphe.classList;
    if (classes.contains("rouge")) {
      classes.replace("rouge", "bleu");
    } else {
      classes.replace("bleu", "rouge");
    }
  }
}
