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
  for (let i = 1; i <= 100; i++) {
    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;
    if (fizz && buzz) {
      console.log("FizzBuzz");
    } else if (fizz) {
      console.log("Fizz");
    } else if (buzz) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
});
