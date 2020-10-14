function resetDiv() {
  document.getElementById("display_first_event").innerHTML = "";
  hideImg();
}
function generateRandomColor() {
  const fontDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  let fontColor = "#";
  let count = 1;

  while (count < 7) {
    let randomDigit = fontDigits[Math.floor(Math.random() * fontDigits.length)];
    fontColor += randomDigit;
    count++;
  }

  return fontColor;
}
function hideImg() {
  document.getElementById("img").style.display = "none";
}
function toggleImg(imageId) {
  if(document.getElementById(imageId).style.display === "none") {
    return document.getElementById(imageId).style.display = "block";
  }
  document.getElementById(imageId).style.display = "none";
}
function quack() {
  let sound = new Audio('./quack.mp3');
  sound.play();
}