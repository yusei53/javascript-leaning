process.stdin.resume();
process.stdin.setEncoding("utf8");
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  const arr = lines[0].split(",");
  arr.forEach((i) => {
    console.log(i);
  });
});

プログラミングに興味を持つ100人以上の学生が所属しており;
