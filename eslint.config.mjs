import { dirname } from "path";
import { fileURLToPath } from "url";
// No need for FlatCompat if you're disabling everything

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [
  {
    ignores: ["**"], // Ignore all files (fully disables linting)
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {}, // Apply no rules
  }
];

export default eslintConfig;
