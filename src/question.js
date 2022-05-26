module.exports = [
  {
    name: "git",
    type: "list",
    message: "请选择您要进行的git操作：",
    choices: [
      { name: "新建feature分支", value: "feature" },
      { name: "提交代码", value: "push" },
      { name: "切换分支", value: "checkout" },
      { name: "新建release分支", value: "release" },
      { name: "自动tag", value: "tag" }
    ],
    filter: function(val) {
      // 使用filter将回答变为小写
      return val.toLowerCase();
    }
  }
];
