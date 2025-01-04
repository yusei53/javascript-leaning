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
  lines.push(line);
});
reader.on("close", () => {
  const n = parseInt(lines[2], 10);
  const a = lines[0].slice(0, n);
  const b = lines[0].slice(n);
  const answer = a + lines[1] + b;
  console.log(answer);
});
