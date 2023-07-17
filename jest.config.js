const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  modulesNameMapper: {
    "@/components/(.*)$": "<rooDir>/components/$1",
    "@/lib/(.*)$": "<rooDir>/lib/$1",
    "@/pages/(.*)$": "<rooDir>/pages/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/public/",
    "<rootDir>/node_modules/",
  ],
  collectCoverageFrom: [
    "<rootDir>/**/*.ts",
    "<rootDir>/**/*.tsx",
    "!/*config.js",
    "!/**/*.spec.js",
    "!/**/*.test.js",
    "!/**/*.setup.js",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
