const fs = require("fs");

fs.readlink("/Users/gregf/new-link", (err, linkString) => {
  if (err) console.log(err);
  else console.log("Path of the symlink:", linkString);
});

let result = "/Users/gregf/new-link";

const test = fs.realpath("/Users/gregf/new-link", (err, linkString) => {
  if (err) console.log(err);
  else result = linkString;
});

console.log("Path of the symlink:", result);
// console.log("test: ", test);
// console.log("test(): ", test());
