process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [8, 1, 3];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  for (const element of lines) {
    console.log(element);
  }
  // mapの方がいいね
  //  lines.map((i) => {
  //    console.log(i);
  //  });
});
