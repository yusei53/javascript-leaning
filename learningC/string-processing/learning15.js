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
  const s = lines[0].split("/");

  s.forEach((part, index) => {
    if (index === 3 && part.includes(":")) {
      const time = part.split(":");
      time.forEach((t) => {
        console.log(t);
      });
    } else {
      console.log(part);
    }
  });
});
