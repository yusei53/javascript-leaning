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
  const n = parseInt(lines[0]);
  const q = parseInt(lines[1]);

  let pass = Array(n).fill(lines[q + 2]);
  for (let i = 0; i < q; i++) {
    let [index, char] = lines[i + 2].split(" ");
    pass[parseInt(index - 1)] = char;
  }

  console.log(pass.join(""));
});
