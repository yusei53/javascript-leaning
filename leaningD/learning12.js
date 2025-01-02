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
  if (lines[0] === "paiza") {
    console.log("YES");
  } else {
    console.log("NO");
  }
  //   const r = lines[0] === "paiza" ? "YES" : "NO"
  //   console.log(r)
});
