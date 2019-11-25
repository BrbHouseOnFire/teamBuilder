const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const outputPath = path.resolve(__dirname, "output", "team.html");
// const render = require("./templates/render");
const teamMembers = [];
const idArray = [];
let html =
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <title>Department Roster</title>
    </head>
    <body>
      <div class="jumbotron">
        <h1 class= "text-center font-weight-bold">Department Members</h1>
      </div>
    <div class="row d-flex">`;


function appMenu() {
  function createManager() {
      inquirer.prompt([
        /* prompt choices here */
        {
          type: "input",
          name: "managerName",
          message: "What is your manager's name?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
        },
        {
          type: "input",
          name: "managerId",
          message: "What is your manager's id?",
          validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is your manager's email?",
          validate: answer => {
            const pass = answer.match(
              /\S+@\S+\.\S+/
            );
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          }
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is your manager's office number?",
          validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
        }
      ]).then(answers => {
        /* build manager */
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
      });
  }
  function createTeam() {
      inquirer.prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members"
          ]
        }
      ]).then(userChoice => {
        switch(userChoice.memberChoice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildTeam();
        }
      });
  }
  function addEngineer() {
      inquirer.prompt([
        /* prompts here */
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's id?",
          validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
          validate: answer => {
            const pass = answer.match(
              /\S+@\S+\.\S+/
            );
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          }
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
        }
      ]).then(answers => {
        /* create engineer */
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
      });
  }
  function addIntern() {
      inquirer.prompt([
        /* prompts here */
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's id?",
          validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is your the intern's email?",
          validate: answer => {
            const pass = answer.match(
              /\S+@\S+\.\S+/
            );
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          }
        },
        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern go to?",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
        }
      ]).then(answers => {
        /* create intern */
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
      });
  }
  function buildTeam() {
    let uniqueValue;
    teamMembers.forEach((e, index) => {
        if (e.getRole() === "Manager"){
          uniqueValue = `Office #: ${e.getOfficeNumber()}`
        }
        if (e.getRole()=== "Engineer"){
          uniqueValue = `GitHub Username: ${e.getGithub()}`
        }
        if (e.getRole()=== "Intern"){
          uniqueValue = `School of Attendance: ${e.getSchool()}`
        }
          let userDiv = `<div class="col-3 m-5" id = "roster${index}">
              <div class="card text-white bg-dark">
                <div class="card-header text-center font-weight-bold">
                  ${e.getRole()}
                </div>
                <div class ="card-body">
                  <div> Name: ${e.getName()}</div>
                  <div> ID: ${e.getId()}</div>
                  <div> Email: ${e.getEmail()}</div>
                  <div> ${uniqueValue} </div>
                </div>
              </div>
            </div>`;
          html += userDiv;
    });
    html += `</div></body></html>`;
    console.log("Writing HTML file to /Develop/output/team.html");
    return fs.writeFileSync("./Develop/output/team.html", html , "utf-8")
  };
  createManager();
}
appMenu();





