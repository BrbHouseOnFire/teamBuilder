const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const outputPath = path.resolve(__dirname, "output", "team.html");
const render = require("./lib/render");
const teamMembers = [];
const idArray = [];


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
      ]).then(answers => {
        /* create engineer */
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerOfficeNumber);
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
      });
    }
    function addIntern() {
      inquirer.prompt([
        /* prompts here */
      ]).then(answers => {
        /* create intern */
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internOfficeNumber);
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
      });
    }

    function buildTeam() {
      const htmlFile = `<html>${teamMembers[0].name}</html>`
      fs.writeFileSync(outputPath, htmlFile, "utf-8");
    }
    createManager();
}
appMenu();





