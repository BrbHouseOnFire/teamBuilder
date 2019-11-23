function appMenu() {
    function createManager() {
      inquirer.prompt([
        /* prompt choices here */
      ]).then(answers => {
        /* build manager */
        createTeam();
      });
    }
    function createTeam() {
      inquirer.prompt([
        /* prompt choice here */
      ]).then(userChoice => {
        /* call one function below based on choice */
      });
    }
    function addEngineer() {
      inquirer.prompt([
        /* prompts here */
      ]).then(answers => {
        /* create engineer */
        createTeam();
      });
    }
    function addIntern() {
      inquirer.prompt([
        /* prompts here */
      ]).then(answers => {
        /* create interin */
        createTeam();
      });
    }
    function buildTeam() {
      fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }
    createManager();
}
appMenu();




// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");
// const outputPath = path.resolve(__dirname, "output", "team.html");
// const render = require("./lib/htmlRenderer");
// const teamMembers = [];
// const idArray = [];





// {
//   type: "input",
//   name: "managerName",
//   message: "What is your manager's name?",
//   validate: answer => {
//     if (answer !== "") {
//       return true;
//     }
//     return "Please enter at least one character.";
//   }
// },
// {
//   type: "input",
//   name: "managerId",
//   message: "What is your manager's id?",
//   validate: answer => {
//     const pass = answer.match(
//       /^[1-9]\d*$/
//     );
//     if (pass) {
//       return true;
//     }
//     return "Please enter a positive number greater than zero.";
//   }
// },
// {
//   type: "input",
//   name: "managerEmail",
//   message: "What is your manager's email?",
//   validate: answer => {
//     const pass = answer.match(
//       /\S+@\S+\.\S+/
//     );
//     if (pass) {
//       return true;
//     }
//     return "Please enter a valid email address.";
//   }
// },
// {
//   type: "input",
//   name: "managerOfficeNumber",
//   message: "What is your manager's office number?",
//   validate: answer => {
//     const pass = answer.match(
//       /^[1-9]\d*$/
//     );
//     if (pass) {
//       return true;
//     }
//     return "Please enter a positive number greater than zero.";
//   }
// }




// const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
// teamMembers.push(manager);
// idArray.push(answers.managerId);
// createTeam();





// const path = require("path");
// const fs = require("fs");
// const templatesDir = path.resolve(__dirname, "../templates");
// const render = employees => {
//   const html = [];
//   html.push(employees
//     .filter(employee => employee.getRole() === "Manager")
//     .map(manager => renderManager(manager))
//   );
//   html.push(employees
//     .filter(employee => employee.getRole() === "Engineer")
//     .map(engineer => renderEngineer(engineer))
//   );
//   html.push(employees
//     .filter(employee => employee.getRole() === "Intern")
//     .map(intern => renderIntern(intern))
//   );
//   return renderMain(html.join(""));
// };
// const renderManager = manager => {
//   let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
//   template = replacePlaceholders(template, "name", manager.getName());
//   template = replacePlaceholders(template, "role", manager.getRole());
//   template = replacePlaceholders(template, "email", manager.getEmail());
//   template = replacePlaceholders(template, "id", manager.getId());
//   template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
//   return template;
// };
// const renderEngineer = engineer => {
//   let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
//   template = replacePlaceholders(template, "name", engineer.getName());
//   template = replacePlaceholders(template, "role", engineer.getRole());
//   template = replacePlaceholders(template, "email", engineer.getEmail());
//   template = replacePlaceholders(template, "id", engineer.getId());
//   template = replacePlaceholders(template, "github", engineer.getGithub());
//   return template;
// };
// const renderIntern = intern => {
//   let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
//   template = replacePlaceholders(template, "name", intern.getName());
//   template = replacePlaceholders(template, "role", intern.getRole());
//   template = replacePlaceholders(template, "email", intern.getEmail());
//   template = replacePlaceholders(template, "id", intern.getId());
//   template = replacePlaceholders(template, "school", intern.getSchool());
//   return template;
// };
// const renderMain = html => {
//   const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
//   return replacePlaceholders(template, "team", html);
// };
// const replacePlaceholders = (template, placeholder, value) => {
//   const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
//   return template.replace(pattern, value);
// };
// module.exports = render;




// function createTeam() {
//   inquirer.prompt([
//     {
//       type: "list",
//       name: "memberChoice",
//       message: "Which type of team member would you like to add?",
//       choices: [
//         "Engineer",
//         "Intern",
//         "I don't want to add any more team members"
//       ]
//     }
//   ]).then(userChoice => {
//     switch(userChoice.memberChoice) {
//     case "Engineer":
//       addEngineer();
//       break;
//     case "Intern":
//       addIntern();
//       break;
//     default:
//       buildTeam();
//     }
//   });
// }



// function buildTeam() {
//   const htmlFile = `<html>${teamMembers[0].name}</html>`
//   fs.writeFileSync(outputPath, htmlFile, "utf-8");
// }