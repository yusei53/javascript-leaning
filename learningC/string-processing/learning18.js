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
  const array = lines[0].split("");
  const uniqueArray = Array.from(new Set(array));
  console.log(uniqueArray.join(""));
});
