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
  const s = lines[0].search(/^[-]?[0-9]+$/);
  // const s = /^[0-9]+$/.test(lines[0]); もあり
  console.log(s == 0 ? "YES" : "NO");
});
