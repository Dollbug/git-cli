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
  console.log("anwsers.git:", anwsers.git);
  switch (anwsers.git) {
    case "update":
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
      break;

    case "newbranch":
      inquirer
        .prompt([
          {
            type: "input",
            name: "branchDesc",
            message: "请输入git分支名称"
          }
        ])
        .then(anwsers => {
          git.newBranch(anwsers);
        })
        .catch(err => {
          console.log(err);
        });
      break;

    case "go":
      inquirer
        .prompt([
          {
            type: "input",
            name: "branch",
            message: "请输入git分支名称"
          }
        ])
        .then(anwsers => {
          git.checkoutBranch(anwsers);
        })
        .catch(err => {
          console.log(err);
        });
      break;

      case "tag":
      inquirer
        .prompt([
          {
            type: "input",
            name: "tag",
            message: "请输入tag名称"
          }
        ])
        .then(anwsers => {
          git.tag(anwsers);
        })
        .catch(err => {
          console.log(err);
        });
      break;
  }
}
