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