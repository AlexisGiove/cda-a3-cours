const textElement = document.getElementById("text");
let isBold = false;
let isItalic = false;
let isUnderline = false;

function makeBold() {
  isBold = !isBold;
  textElement.style.fontWeight = isBold ? "bold" : "normal";
}

function makeItalic() {
  isItalic = !isItalic;
  textElement.style.fontStyle = isItalic ? "italic" : "normal";
}

function makeUnderline() {
  isUnderline = !isUnderline;
  textElement.style.textDecoration = isUnderline ? "underline" : "none";
}

function clearFormatting() {
  isBold = false; 
  isItalic = false;
  isUnderline = false;
  textElement.style.fontWeight = "normal";
  textElement.style.fontStyle = "normal";
  textElement.style.textDecoration = "none";
}
