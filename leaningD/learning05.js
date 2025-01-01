process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [437326, 9085];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  const a = lines[0] / lines[1];
  const b = Math.trunc(a);
  const c = lines[0] % lines[1];
  console.log(`${b} ${c}`);
});
