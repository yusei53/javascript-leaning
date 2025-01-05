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
  const [i, s] = lines[1].split(" ");
  const a = lines[0].slice(0, i - 1);
  const b = lines[0].slice(i);
  const answer = a + s + b;
  console.log(answer);
});
