process.stdin.resume();
process.stdin.setEncoding("utf8");

const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  const [date, time] = lines[0].split(" ");
  const [year, month, day] = date.split("/");
  const [hour, minute] = time.split(":");

  console.log(year);
  console.log(month);
  console.log(day);
  console.log(hour);
  console.log(minute);
});
