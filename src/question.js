module.exports = [
  {
    name: "git",
    type: "expand",
    message: "请选择您要进行的git操作：",
    choices: [
      { key: "A", name: "提交代码", value: "push" },
      { key: "B", name: "切换分支", value: "checkout" },
      { key: "C", name: "新建feature分支", value: "feature" },
      { key: "D", name: "新建release分支", value: "release" },
      { key: "E", name: "自动tag", value: "tag" }
    ],
    filter: function(val) {
      // 使用filter将回答变为小写
      return val.toLowerCase();
    }
  }
];
