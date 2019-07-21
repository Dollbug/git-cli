// 此脚本必须在当前要打tag的分支运行

let { execSync } = require("child_process");
var currentBranch = execSync("git rev-parse --abbrev-ref HEAD")
  .toString()
  .replace(/\s+/, "");

// 当前要打tag的分支
// const tag = currentBranch.slice(
//   currentBranch.length - 10,
//   currentBranch.length
// );

// console.log("当前分支：", currentBranch);

// if (currentBranch !== "master") {
//   execSync("git checkout master");
// }

// execSync(`git tag ${tag}`);
// execSync("git push origin --tags");

// // 删除分支
// execSync(`git push origin :${currentBranch}`);
// execSync(`git branch ${currentBranch} -D`);
// execSync("git tag");

function updateCode({ commit }) {
  console.log("当前分支：", currentBranch);
  execSync("git add .");
  execSync(`git commit -m ${commit}`);
  execSync(`git pull origin ${currentBranch}`);
  execSync(`git push origin ${currentBranch}`);
}

module.exports = {
  updateCode
};
