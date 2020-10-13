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
