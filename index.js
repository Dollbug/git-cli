#! /usr/bin/env node
var inquirer = require("inquirer");
const questions = require("./question");
const git = require("./git");

inquirer
  .prompt(questions)
  .then(anwsers => doAnswer(anwsers))
  .catch(err => {
    console.log(err);
  });

function doAnswer(anwsers) {
  if (anwsers.git == "update") {
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
        git.updateCode(anwsers);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
