const { spawn } = require("child_process");

// const child = spawn(
//   "git",
//   ["show", "--textconv", ":../../../../new-link/test.txt"],
//   {
//     cwd: "/Users/gregf/a/b/c/fix-vscode-symlinks",
//   }
// );

// working
const child = spawn("git", ["show", "--textconv", ":test.txt"], {
  cwd: "/Users/gregf/a/b/c/fix-vscode-symlinks",
});

child.stdout.on("data", (data) => {
  console.log(`stdout:\n${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`stderr:\n${data}`);
});

child.on("error", (error) => {
  console.error(`error: ${error.message}`);
});

child.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
