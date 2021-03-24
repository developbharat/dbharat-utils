import inquirer from "inquirer";

export interface MenuAnswers {
  menu: "create-new-monorepo" | "generate-project" | "generate-files";
}

export const menuQuestions: inquirer.QuestionCollection = [
  {
    type: "list",
    name: "menu",
    message: "Select a menu choice to proceed:",
    choices: [
      { name: "Create new monorepo", value: "create-new-monorepo" },
      { name: "Generate project", value: "generate-project" },
      { name: "Generate files", value: "generate-files" },
    ],
  },
];
