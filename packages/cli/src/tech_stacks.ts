import inquirer from "inquirer";

export interface StackAnswers {
  stack: "nextjs-apollo-graphql-auth" | "express-typescript" | "react-storybook";
}

export const stackQuestions: inquirer.QuestionCollection = [
  {
    type: "list",
    name: "stack",
    message: "Select a stack choice to create:",
    choices: [
      { name: "NextJS + Apollo + Graphql + Auth", value: "nextjs-apollo-graphql-auth" },
      { name: "ExpressJs + Typescript", value: "express-typescript" },
      { name: "React + Storybook", value: "react-storybook" },
    ],
  },
];
