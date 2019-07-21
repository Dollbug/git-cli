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

    case "feature":
      inquirer
        .prompt([
          {
            type: "input",
            name: "feature",
            message: "请输入git分支名称",
            default: "function"
          }
        ])
        .then(anwsers => {
          git.feature(anwsers);
        })
        .catch(err => {
          console.log(err);
        });
      break;

    case "release":
      inquirer
        .prompt([
          {
            type: "input",
            name: "release",
            message: "请输入release分支名称",
            default: "release-v1.22."
          }
        ])
        .then(anwsers => {
          git.release(anwsers);
        })
        .catch(err => {
          console.log(err);
        });
      break;

    case "tag":
      git.tag();
      break;
  }
}
