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
  lines = line.split(" ").map(Number);
});
reader.on("close", () => {
  const n = lines[0] * lines[1];
  if (n <= lines[2]) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
