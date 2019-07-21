module.exports = [
  {
    name: "git",
    type: "list",
    message: "请选择您要进行的git操作：",
    choices: [
      { name: "提交代码", value: "update" },
      { name: "新建分支", value: "newBranch" },
      { name: "切换分支", value: "go" },
      { name: "自动tag", value: "tag" }
    ],
    filter: function(val) {
      // 使用filter将回答变为小写
      return val.toLowerCase();
    }
  }
];
