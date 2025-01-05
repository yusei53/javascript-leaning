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
  const arraySplit = lines[0].split("");
  const isUpperCase = (str) => {
    return /^[A-Z]+$/g.test(str);
  };

  const result = arraySplit.map((s) => {
    if (isUpperCase(s)) {
      return s.toLowerCase();
    } else {
      return s.toUpperCase();
    }
  });

  const answer = result.join("");
  console.log(answer);
});
