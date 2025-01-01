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
  const N = lines[0].split(" ").map(Number); // 数値型に変換しないと文字列結合される
  var n = N[0];
  n -= N[1];
  n += N[2];
  console.log(n);
});
