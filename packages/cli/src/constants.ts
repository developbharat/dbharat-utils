import path from "path";

export const __TEMPLATES_DIR__: string = path.join(__dirname, "..", "templates");

// Related to projects inside templates directories.
export const __MONOREPO_DIR__: string = path.join(__TEMPLATES_DIR__, "monorepo");
export const __EXPRESS_TYPESCRIPT_DIR__: string = path.join(__TEMPLATES_DIR__, "express-typescript");
export const __NEXT_APOLLO_GRAPHQL_AUTH__: string = path.join(__TEMPLATES_DIR__, "nextjs-apollo-graphql-auth");
export const __REACT_STORYBOOK__: string = path.join(__TEMPLATES_DIR__, "react-storybook");
