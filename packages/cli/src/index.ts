import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import {
  __EXPRESS_TYPESCRIPT_DIR__,
  __MONOREPO_DIR__,
  __NEXT_APOLLO_GRAPHQL_AUTH__,
  __REACT_STORYBOOK__,
} from "./constants";
import { MenuAnswers, menuQuestions } from "./menu";
import { StackAnswers, stackQuestions } from "./tech_stacks";
import { copyRecursiveSync } from "./utils/copyRecursive";

const create_new_monorepo = async (): Promise<void> => {
  return new Promise<void>(async (resolve, _) => {
    const { projectdir } = await inquirer.prompt([
      { type: "input", name: "projectdir", message: "Enter project name: " },
    ]);
    const dest = path.join(process.cwd(), projectdir);

    if (fs.existsSync(dest)) {
      console.log("Directory with provided name already exists. Please remove the directory before creating monorepo.");
      process.exit(1);
    }

    // Copy monorepo files.
    copyRecursiveSync(__MONOREPO_DIR__, dest);

    return resolve();
  });
};

const generate_new_project = async (): Promise<void> => {
  const stackAnswers = await inquirer.prompt<StackAnswers>(stackQuestions);
  const { projectName } = await inquirer.prompt([
    { name: "projectName", type: "input", message: "Enter project name: " },
  ]);

  const dest = path.join(process.cwd(), projectName);
  switch (stackAnswers.stack) {
    case "nextjs-apollo-graphql-auth":
      copyRecursiveSync(__NEXT_APOLLO_GRAPHQL_AUTH__, dest);
      break;
    case "express-typescript":
      copyRecursiveSync(__EXPRESS_TYPESCRIPT_DIR__, dest);
      break;
    case "react-storybook":
      copyRecursiveSync(__REACT_STORYBOOK__, dest);
      break;
    default:
      console.log("Invalid entry...");
      process.exit(1);
  }
};

const generate_files = async (): Promise<void> => {
  // TODO: implementation missing.
  const { stack } = await inquirer.prompt<StackAnswers>(stackQuestions);

  switch (stack) {
    case "nextjs-apollo-graphql-auth":
      // TODO: Prompt for nextjs-apollo-graphq-auth project related questions.
      break;
    case "express-typescript":
      // TODO: prompt for express-typescript related questions.
      break;
    case "react-storybook":
      // TODO: prompt for react storybook related questions.
      break;
    default:
      console.log("Invalid entry...");
      process.exit(1);
  }
};

const main = async () => {
  const menuAnswers = await inquirer.prompt<MenuAnswers>(menuQuestions);
  switch (menuAnswers.menu) {
    case "create-new-monorepo":
      await create_new_monorepo();
      break;
    case "generate-project":
      await generate_new_project();
      break;
    case "generate-files":
      await generate_files();
      break;
    default:
      console.log("Invalid choice...");
      process.exit(1);
  }
};

main();
