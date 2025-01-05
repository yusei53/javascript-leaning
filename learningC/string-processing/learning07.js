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
  const [n1, n2, n3] = lines.map(Number);
  const result = (n1 + n2).toString();
  const i = parseInt(n3, 10);
  const answer = result.charAt(i - 1);
  console.log(answer);
});
