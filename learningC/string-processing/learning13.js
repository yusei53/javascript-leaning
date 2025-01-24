process.stdin.resume();
process.stdin.setEncoding("utf8");
const isPalindrome = (s) => {
  const currentText = String(s);
  const reverse = currentText.split("").reverse().join("");
  return currentText === reverse;
};
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  if (isPalindrome(lines[0])) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
