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
  const s1 = lines[0];
  const s2 = lines[1];

  if (s1.indexOf(s2) != -1) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
