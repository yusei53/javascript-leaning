process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(parseInt(line, 10));
});
reader.on("close", () => {
  if (lines[0] === 7) {
    console.log("Yes");
  } else {
    console.log("No");
  }
});
