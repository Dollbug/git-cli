#! /usr/bin/env node
var inquirer = require("inquirer");
const questions = require("./question");
const git = require("./git");
console.log(git)

inquirer
  .prompt(questions)
  .then(anwsers => doAnswer(anwsers))
  .catch(err => {
    console.log(err);
  });

function doAnswer(anwsers) {
  console.log(JSON.stringify(anwsers, null, "  "));
  if (anwsers.git == "update") {
    console.log(anwsers.git, 222);
    inquirer
      .prompt([
        {
          type: "input",
          name: "commit",
          message: "请输入git commit:",
          default: "update"
        }
      ])
      .then(anwsers => {
        // Use user feedback for... whatever!!
        console.log(JSON.stringify(anwsers, null, "  "));
        git.updateCode(anwsers)
      })
      .catch(err => {
        console.log(err);
      });
  }
}
